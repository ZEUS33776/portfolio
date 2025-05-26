import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type Section = "hero" | "about" | "projects" | "skills" | "experience" | "contact";

interface PortfolioState {
  // UI State
  isLoading: boolean;
  currentSection: Section;
  isMenuOpen: boolean;
  
  // 3D Scene State
  cameraPosition: [number, number, number];
  sceneRotation: number;
  
  // Project State
  selectedProject: string | null;
  projectModalOpen: boolean;
  
  // Contact State
  contactFormData: {
    name: string;
    email: string;
    message: string;
  };
  
  // Actions
  setLoading: (loading: boolean) => void;
  setCurrentSection: (section: Section) => void;
  setMenuOpen: (open: boolean) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  setSceneRotation: (rotation: number) => void;
  setSelectedProject: (projectId: string | null) => void;
  setProjectModalOpen: (open: boolean) => void;
  updateContactForm: (data: Partial<PortfolioState['contactFormData']>) => void;
  resetContactForm: () => void;
}

const initialContactForm = {
  name: "",
  email: "",
  message: ""
};

export const usePortfolio = create<PortfolioState>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    isLoading: true,
    currentSection: "hero",
    isMenuOpen: false,
    cameraPosition: [0, 0, 5],
    sceneRotation: 0,
    selectedProject: null,
    projectModalOpen: false,
    contactFormData: initialContactForm,
    
    // Actions
    setLoading: (loading) => set({ isLoading: loading }),
    
    setCurrentSection: (section) => {
      set({ currentSection: section });
      
      // Update camera position based on section
      const positions: Record<Section, [number, number, number]> = {
        hero: [0, 0, 5],
        about: [2, 1, 4],
        projects: [-2, 2, 6],
        skills: [3, -1, 5],
        experience: [-1, 2, 4],
        contact: [0, -1, 3]
      };
      
      const newPosition = positions[section];
      if (newPosition) {
        set({ cameraPosition: newPosition });
      }
    },
    
    setMenuOpen: (open) => set({ isMenuOpen: open }),
    
    setCameraPosition: (position) => set({ cameraPosition: position }),
    
    setSceneRotation: (rotation) => set({ sceneRotation: rotation }),
    
    setSelectedProject: (projectId) => set({ selectedProject: projectId }),
    
    setProjectModalOpen: (open) => {
      set({ projectModalOpen: open });
      if (!open) {
        set({ selectedProject: null });
      }
    },
    
    updateContactForm: (data) => 
      set((state) => ({
        contactFormData: { ...state.contactFormData, ...data }
      })),
    
    resetContactForm: () => set({ contactFormData: initialContactForm })
  }))
);

// Selector hooks for performance
export const useCurrentSection = () => usePortfolio((state) => state.currentSection);
export const useIsLoading = () => usePortfolio((state) => state.isLoading);
export const useSelectedProject = () => usePortfolio((state) => state.selectedProject);
export const useCameraPosition = () => usePortfolio((state) => state.cameraPosition);

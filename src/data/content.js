import { profileData } from './profile';
import { aboutData } from './about';
import { focusAreasTitle, focusAreasData } from './focusAreas';
import { featuredProjectData } from './featuredProject';
import { projectsData } from './projects';

export const personalData = {
  ...profileData,
  about: aboutData,
  focusAreasTitle: focusAreasTitle,
  focusAreas: focusAreasData,
  featuredProject: featuredProjectData,
  projects: projectsData
};

export { profileData, aboutData, focusAreasTitle, focusAreasData, featuredProjectData, projectsData };


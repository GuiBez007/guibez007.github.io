import { profileData } from './profile';
import { aboutData } from './about';
import { focusAreasTitle, focusAreasData } from './focusAreas';
import { featuredProjectData } from './featuredProject';

export const personalData = {
  ...profileData,
  about: aboutData,
  focusAreasTitle: focusAreasTitle,
  focusAreas: focusAreasData,
  featuredProject: featuredProjectData
};

export { profileData, aboutData, focusAreasTitle, focusAreasData, featuredProjectData };

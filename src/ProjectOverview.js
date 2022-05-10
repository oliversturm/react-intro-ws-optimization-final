import { useCallback, useState } from 'react';

import ProjectStepList from './ProjectStepList';

const ProjectOverview = () => {
  console.log('Rendering project overview');
  const [currentTime, setCurrentTime] = useState(Date());
  const update = () => {
    console.log('Updating current time');
    setCurrentTime(Date());
  };

  const [projectSteps, setProjectSteps] = useState([
    'Sort out details',
    'Implement',
    'Ship',
  ]);

  const addStep = useCallback(() => {
    setProjectSteps((steps) => steps.concat(`New step added ${Date()}`));
  }, [setProjectSteps]);

  return (
    <>
      <div>Current time: {currentTime}</div>
      <button onClick={update}>Update current time</button>

      <ProjectStepList steps={projectSteps} addStep={addStep} />
    </>
  );
};

export default ProjectOverview;

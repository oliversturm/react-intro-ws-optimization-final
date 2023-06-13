import { memo } from 'react';

const ProjectStepList = ({ steps, addStep }) => {
  console.log('Rendering project step list');

  const handle = (i) => () => {
    alert(`Now doing something with item ${i}`);
  };

  return (
    <>
      <h3>Project Steps:</h3>
      <button onClick={addStep}>Add Step</button>
      <ul>
        {steps.map((s, i) => (
          <li key={i}>
            {s} <button onClick={handle(i)}>✓</button>
          </li>
        ))}
      </ul>
    </>
  );
};

const ProjectStepListMemo = memo(ProjectStepList);
export default ProjectStepListMemo;

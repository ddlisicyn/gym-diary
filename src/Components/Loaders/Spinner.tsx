export const Spinner = ({ width }: { width: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={width} viewBox="0 0 200 200">
      <circle fill="#FB5E05" stroke="#FB5E05" strokeWidth="2" r="15" cx="40" cy="65">
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.4"
        ></animate>
      </circle>
      <circle fill="#FB5E05" stroke="#FB5E05" strokeWidth="2" r="15" cx="100" cy="65">
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="-.2"
        ></animate>
      </circle>
      <circle fill="#FB5E05" stroke="#FB5E05" strokeWidth="2" r="15" cx="160" cy="65">
        <animate
          attributeName="cy"
          calcMode="spline"
          dur="2"
          values="65;135;65;"
          keySplines=".5 0 .5 1;.5 0 .5 1"
          repeatCount="indefinite"
          begin="0"
        ></animate>
      </circle>
    </svg>
  );
};

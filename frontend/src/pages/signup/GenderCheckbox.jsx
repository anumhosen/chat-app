function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex">
      <div>
        <label className="label p-2">
          <span className="text-base label-text text-gray-300">Gender :</span>
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-300">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-300"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-300">Female</span>
          <input
            type="checkbox"
            className="checkbox border-gray-300"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;

// STATER CODES
// function GenderCheckbox() {
//   return (
//     <div className="flex">
//       <div>
//         <label className="label p-2">
//           <span className="text-base label-text">Gender :</span>
//         </label>
//       </div>
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Male</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Female</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   );
// }

// export default GenderCheckbox;

import React, { useState } from "react";

export default function({ data, handleChange, loadAll,more,search,addCountry }) {
  console.log(data.length);
  const [drpdown, setDrpdwn] = useState(false);
  function showDropdown() {
    setDrpdwn(true);
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 dropdown">
            <div className="border p-2 text-left" onClick={showDropdown}>
              Select a location <span><img src="images/drop-down-arrow.svg" /></span>
            </div>
            {drpdown && (
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={e => handleChange(e)}
                  className="w-100"
                />
                <ul>
                  {data.map((ddata, key) => (
                    <li>
                      {ddata.name}
                      {key == 4 && (
                        more==true && <span onClick={() => loadAll()}> 5 more...</span>
                      )}
                    </li>
                  ))}
                  {data.length == 0 && <li> {' " '}{search}{' " '} Not Found <span className="border p-1 mt-2" onClick={()=>addCountry()}>Add & set</span></li>}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

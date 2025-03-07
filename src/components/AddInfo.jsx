import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const AddInfo = () => {
  const [value, setValue] = useState("");

  return (
    <section className="w-full -minh-[90vh] flex items-center justify-center  ">
      <div className=" border w-full ">
        <form action="" className="">
          <div className="m-5">
            <label htmlFor="" className="block">
              TITLE
            </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="border-3 w-full px-2 py-2 rounded-xl "
            />
          </div>
          <div className="m-5">
            <label htmlFor="" className="block">
              DESCRIPTION
            </label>
            <input
              type="textarea"
              className="border-3 w-full 
                px-2 py-5  rounded-xl"
            />
          </div>
          <div className="m-5">
            <label htmlFor="" className="block">
              CATEGORY
            </label>
            <input
              type="text"
              placeholder=""
              className="border-3 rounded-xl w-full px-2 py-2"
            />
          </div>
          <div className="m-5">
            <label htmlFor="" className="block">
              IMAGE LINK
            </label>
            <input
              type="text"
              className="border-3 rounded-xl w-full px-2 py-2"
            />
          </div>
          <div className="m-5" data-color-mode="white">
            <label htmlFor="">ADD BLOG</label>
            <div className="container ">
              <MDEditor value={value} onChange={setValue} style={{backgroundColor:"white",color:'black'}}/>
              <MDEditor.Markdown
                source={value}
                style={{ whiteSpace: "pre-wrap",backgroundColor:"white" ,color:'black'}}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddInfo;

import React from "react";
import ComponentLayout from "../../layouts/ComponentLayout";
import PageLayout from "../../layouts/PageLayout";

function ProgressBars() {
  return (
    <PageLayout>
      <ComponentLayout colSpan={3} title="Simple progress bar">
        <div>
          <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div className="w-full h-2 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={3} title="Fat progress bar">
        <div>
          <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={3} title="With label">
        <div>
          <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-green-500 rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={6} title="Colored">
        <div className="flex gap-4">
          <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-red-500 rounded-full">
                75%
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-yellow-500 rounded-full">
                75%
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-purple-500 rounded-full">
                75%
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg w-72 shadow block p-4 m-auto">
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-pink-500 rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={3} title="TASK IN PROGRESS">
        <div>
          <div className="bg-white rounded-lg w-72 shadow-lg block p-4 m-auto">
            <span className="py-1 px-2 bg-pink-300 rounded-full text-white">
              TASK IN PROGRESS
            </span>
            <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
              <div className="w-3/4 h-full text-center text-xs text-white bg-pink-300 rounded-full">
                75%
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </PageLayout>
  );
}

export default ProgressBars;

import React from "react";
import NotesDashboard from "../components/NotesDashboard";

const DashboardView = () => {
  return (
    <div>
      {/* layout to be wrapped around, with a nav bar and stuff */}
      <NotesDashboard resource={"/notes"} />
    </div>
  );
};

export default DashboardView;

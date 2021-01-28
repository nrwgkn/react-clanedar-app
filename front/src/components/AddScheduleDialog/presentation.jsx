import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";

const AddScheduleDialog = ({ schedule: { isDialogOpen } }) => {
  return (
    <Dialog open={isDialogOpen} maxWidth="xs" fullWidth>
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;

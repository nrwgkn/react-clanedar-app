import AddScheduleDialog from "./presentation";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ schedule: state.addSchedule });

export default connect(mapStateToProps)(AddScheduleDialog);

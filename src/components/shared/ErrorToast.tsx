import { State } from "@interfaces/State";
import { Snackbar } from "@mui/material";
import { errorActions } from "@store/errorSlice";
import { useDispatch, useSelector } from "react-redux";

const ErrorToast: React.VFC = () => {

  const dispatch = useDispatch();
  const error = useSelector((state: State) => state.errorReducer.error);

  const handleClose = () => {
    dispatch(errorActions.clearError());
  }

  return <>
    {!!error.message && <Snackbar open={!!error.message} anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }} message={error.message} autoHideDuration={3000} onClose={handleClose} />}
  </>
};

export default ErrorToast
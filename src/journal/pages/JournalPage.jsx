import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        size="large"
        sx={{
          backgroundColor: "danger.main",
          position: "fixed",
          right: 40,
          bottom: 40,
          ":hover": { backgroundColor: "danger.main", opacity: 0.9 },
        }}
        disabled={isSaving}
        onClick={onClickNewNote}
      >
        <Add sx={{ color: "white" }} />
      </IconButton>
    </JournalLayout>
  );
};

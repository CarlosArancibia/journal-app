import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startDeleteNote, startSaveNote, startUploadFiles } from "../../store/journal/thunks";

export const NoteView = () => {
  const { active: note, messageSaved, isSaving } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const { title, body, date, imageUrls, onInputChange, formState } = useForm(note);

  const inputFilesRef = useRef();

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toDateString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Note updated", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onDeleteNote = () => {
    dispatch(startDeleteNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;

    dispatch(startUploadFiles(target.files));
  };

  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item>
        <Typography component={"h2"} fontSize={39} fontWeight={"light"}>
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          type="file"
          multiple
          ref={inputFilesRef}
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />

        <IconButton disabled={isSaving} color="primary" onClick={() => inputFilesRef.current.click()}>
          <UploadOutlined />
        </IconButton>

        <Button disabled={isSaving} sx={{ p: 1 }} onClick={onSaveNote}>
          <SaveOutlined sx={{ mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          label="Title"
          placeholder="Enter a title"
          name="title"
          variant="filled"
          fullWidth
          sx={{ mb: 1 }}
          value={title}
          onChange={onInputChange}
        />
        <TextField
          placeholder="¿What happened today?"
          name="body"
          variant="filled"
          fullWidth
          multiline
          minRows={5}
          sx={{ mb: 1 }}
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent={"end"}>
        <Button color="danger" onClick={onDeleteNote}>
          <DeleteOutline sx={{ mr: 1 }} />
          Delete
        </Button>
      </Grid>
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};

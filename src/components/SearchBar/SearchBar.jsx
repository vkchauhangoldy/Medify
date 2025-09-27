import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ list, filterList }) {
  const [inputText, setInputText] = useState("");

  const filteredList = useMemo(
    () =>
      inputText.trim()
        ? list.filter(({ "Hospital Name": name }) =>
            name.toLowerCase().includes(inputText.trim().toLowerCase())
          )
        : list,
    [inputText, list]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          inputProps={{ maxLength: 100 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: 1.5, px: 8, flexShrink: 0  }}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}

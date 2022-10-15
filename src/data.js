import { IoGameController, IoMusicalNote } from "react-icons/io5";
import { FaSmileWink, FaFilm, FaQq } from "react-icons/fa";
import { GiAngelOutfit } from "react-icons/gi";
import { MdEmojiNature } from "react-icons/md";

export const categories = [
  { id: 1, name: "Games", iconSrc: <IoGameController fontSize={"22px"} /> },
  { id: 2, name: "Funny", iconSrc: <FaSmileWink fontSize={"22px"} /> },
  { id: 3, name: "Animals", iconSrc: <FaQq fontSize={"22px"} /> },
  { id: 4, name: "Movies", iconSrc: <FaFilm fontSize={"22px"} /> },
  { id: 5, name: "Anime", iconSrc: <GiAngelOutfit fontSize={"22px"} /> },
  { id: 6, name: "Music", iconSrc: <IoMusicalNote fontSize={"22px"} /> },
  { id: 7, name: "Nature", iconSrc: <MdEmojiNature fontSize={"22px"} /> },
];
import generalKnowledge from "../assets/general_knowledge.png"
import history from "../assets/history.png"
import sports from "../assets/sports.png"
import music from "../assets/music.png"
import technology from "../assets/technology.png"
import mythology from "../assets/mythology.png"
import books from "../assets/book.jpg"
import film from "../assets/film.jpg"
import musicalAndTheatre from "../assets/musicalandtheatre.jpg"
import television from "../assets/television.jpg"
import videoGames from "../assets/videogames.jpg"
import boardGames from "../assets/boardgames.jfif"
import scienceAndNature from "../assets/scienceandnature.jpg"
import computers from "../assets/computers.jpg"
import math from "../assets/math.jpg"
import geography from "../assets/geography.jpg"
import politics from "../assets/politics.jpg"
import art from "../assets/art.jpg"
import celebrities from "../assets/celebrities.jpg"
import animals from "../assets/animals.jpg"
import vehicles from "../assets/vehicles.jpg"
import comics from "../assets/comics.jpg"
import animeAndManga from "../assets/animeandmanga.jpeg"
import cartoon from "../assets/cartoon.jpg"

export interface Themes {
    name: string,
    to:string,
    image:string
}

export const themes: Themes[] = [
    {
        name: "General Knowledge",
        to: "9",
        image: generalKnowledge
    },
    {
        name: "Books",
        to: "10",
        image: books
    },
    {
        name: "Film",
        to: "11",
        image: film
    },
    {
        name: "Music",
        to: "12",
        image: music
    },
    {
        name: "Musical and Theatres",
        to: "13",
        image: musicalAndTheatre
    },
    {
        name: "Television",
        to: "14",
        image: television
    },
    {
        name: "Video games",
        to: "15",
        image: videoGames
    },
    {
        name: "Board games",
        to: "16",
        image: boardGames
    },
    {
        name: "Science and nature",
        to: "17",
        image: scienceAndNature
    },
    {
        name: "Computers",
        to: "18",
        image: computers
    },
    {
        name: "Mathematics",
        to: "19",
        image: math
    },
    {
        name: "Mythology",
        to: "20",
        image: mythology
    },
    {
        name: "Sports",
        to: "21",
        image: sports
    },
    {
        name: "Geography",
        to: "22",
        image: geography
    },
    {
        name: "History",
        to: "23",
        image: history
    },
    {
        name: "Politics",
        to: "24",
        image: politics
    },
    {
        name: "Art",
        to: "25",
        image: art
    },
    {
        name: "Celebrities",
        to: "26",
        image: celebrities
    },
    {
        name: "Animals",
        to: "27",
        image: animals
    },
    {
        name: "Vehicles",
        to: "28",
        image: vehicles
    },
    {
        name: "Comics",
        to: "29",
        image: comics
    },
    {
        name: "Gadges",
        to: "30",
        image: technology
    },
    {
        name: "Anime and manga",
        to: "31",
        image: animeAndManga
    },
    {
        name: "Cartoon and animation",
        to: "32",
        image: cartoon
    },
]
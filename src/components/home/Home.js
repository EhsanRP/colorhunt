import React, {useContext, useEffect, useState} from 'react';
import Card from "../shared/Card"
import "./Home.css"
import Loading from "../loading/Loading";
import {PaletteContext} from "../../context/PaletteContext";
import {
    fetchAllPalettesById,
    fetchPalettes,
    fetchPalettesByCategoryId,
    fetchPopular,
    fetchRandom
} from "../../functions/paletteApiCalls";
import {useHistory, useParams} from "react-router-dom";

const Home = () => {

    const {pageName, categoryId} = useParams()
    const {state, dispatch, likes} = useContext(PaletteContext)
    const [pageNumber, setPageNumber] = useState(0)
    const [oldPage, setOldPage] = useState("HOME")

    useEffect(() => {
        if (pageName === "popular") {

            if (oldPage !== pageName) {
                setPageNumber(0)
                setOldPage(pageName)
            }

            const fetchPopularPalettes = async () => {
                const newContent = await fetchPopular(pageNumber)
                dispatch({type: "INIT", payload: newContent})
            }
            fetchPopularPalettes()
        } else if (pageName === "random") {

            if (oldPage !== pageName) {
                setPageNumber(0)
                setOldPage(pageName)
            }

            const fetchRandomPalettes = async () => {
                const newContent = await fetchRandom(pageNumber)
                dispatch({type: "INIT", payload: newContent})
            }
            fetchRandomPalettes()
        } else if (pageName === "collection") {
            if (oldPage !== pageName) {
                setPageNumber(0)
                setOldPage(pageName)
            }
            const fetchCollection = async () => {
                const newContent = await fetchAllPalettesById(likes)
                dispatch({type: "INIT", payload: {content: [...newContent]}})
            }
            fetchCollection()
        } else if (categoryId) {

            if (oldPage !== pageName) {
                setPageNumber(0)
                setOldPage(pageName)
            }

            const fetchCategory = async () => {
                const newContent = await fetchPalettesByCategoryId(categoryId, pageNumber)
                dispatch({type: "INIT", payload: newContent})

            }
            fetchCategory()
        } else {

            if (oldPage !== pageName) {
                setPageNumber(0)
                setOldPage(pageName)
            }

            const fetchPages = async () => {
                const newContent = await fetchPalettes(pageNumber)
                dispatch({type: "INIT", payload: newContent})
            }
            fetchPages()
        }

    }, [pageNumber, pageName, categoryId])


    const paginate = async (event) => {
        switch (event.target.id) {
            case "next":
                setPageNumber(prevState => ++prevState)
                break
            case "prev":
                if (pageNumber > 0) {
                    setPageNumber(prevState => --prevState)
                }
                break
        }
    }
    return (
        <div className="home">
            <div className="palettesContainer">
                {state == null && <Loading/>}
                {state && state.content.map(item => <Card key={item.id}
                                                          likesContext={likes}
                                                          dispatch={dispatch}
                                                          palette={item}/>)}

            </div>

            {
                pageName !== "collection" &&
                <div className="paginate">
                    {pageNumber > 0 && <div id="prev" className="btn-round" onClick={paginate}>Previous</div>}
                    <div className="btn-round">{pageNumber + 1}</div>
                    {!state.last && <div id="next" className="btn-round" onClick={paginate}>Next</div>}
                </div>
            }
        </div>


    );
};

export default Home;
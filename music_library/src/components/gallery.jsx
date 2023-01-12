import GalleryItem from './galleryItem'

function Gallery(props) {

    const display = props.data.map((song, index) => {
        return (
            <GalleryItem item= {song} key={index} />
        )
    })


    return (
        <div>
            {songList}
        </div>

    )
}

export default Gallery 
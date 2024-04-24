
// eslint-disable-next-line react/prop-types
export const GifCard = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url}/>
            <p>{title}</p>
        </div>
    )
}

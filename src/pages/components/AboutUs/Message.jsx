import img1 from '../../../assets/banner/author.jpeg'

const Message = () => {
    let content

    content = (
        <div className="hero h-50 bg-base-200 mt-2 ml-2">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-green-700 font-bold">Message from author</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    )

    return content
}

export default Message
import React, { Component } from 'react'
export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date ,source} = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <div style={{display:'fles',
                                display:'flex-end',
                                position:'absolute',
                                right:'0',
                                }}      
                >
                        <span className="badge rounded-pill text-bg-danger" >{source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://images.cointelegraph.com/images/747_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDcvZjE2ZTJhMjUtNzExNC00MTZhLWFjMTAtN2Q5ZDAyMDUyOWEwLmpwZw==.jpg"} className='card-img-top' alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="text-body-secondary">By {!author ? "anonymous" : author} on {new Date(date).toGMTString()}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem
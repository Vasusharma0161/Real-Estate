import React, { Component } from 'react';
import Search from './components/Search'
import Job from './components/Job'
import axios from 'axios'


class Home extends Component {
    // constructor(prop) {
    //     super(prop);
    //     this.state = { value: '' };

    //     this.handleChange = this.handleChange.bind(this);
    // }
    state = {
        value: "",
        placeImg: [],
        placeTitle: [],
        contact: [],
        placeLocation: [],
        price: [],
        placeLink: [],
    }


    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    SearchApi = async (word) => {
        console.log(word, this.state.placeTitle)
        this.state.placeImg = [];
        this.state.placeTitle = [];
        this.state.contact = [];
        this.state.placeLocation = [];
        this.state.price = [];
        this.state.placeLink = [];
        await axios({
            method: "post",
            url: "https://realestate-info.herokuapp.com/search?letter=" + word,
            data: {},
        }).then((response) => {
            this.setState({ placeImg: response.data[word].img, placeTitle: response.data[word].title, contact: response.data[word].contact, placeLocation: response.data[word].location, price: response.data[word].price, placeLink: response.data[word].Link});
            console.log(response.data[word])
        })
    }


    AllData = async () => {
        this.state.placeImg = [];
        this.state.placeTitle = [];
        this.state.contact = [];
        this.state.placeLocation = [];
        this.state.price = [];
        this.state.placeLink = [];
        await axios("https://realestate-info.herokuapp.com/home",
            { mode: "no-cors" }).then(response => {
                this.setState({ placeImg: [...response.data.img], placeTitle: [...response.data.title], contact: [...response.data.contact], placeLocation: [...response.data.location], price: [...response.data.price], placeLink: [...response.data.Link] }
                );
            });
    };
componentDidMount() {
    window.addEventListener('load', this.AllData);
 }

 componentWillUnmount() {
   window.removeEventListener('load', this.AllData)
 }

    render() {
        return (
            <div className="lg:px-52 md:px-44 sm:px-10 px-10 overflow-hidden text-center">
                <Search />
                <div className="overflow-hidden align-middle lg:space-y-44 md:space-y-20 sm:space-y-10 space-y-4 lg:mt-44 md:mt-44 sm:mt-32 mt-32 lg:mb-10 md:mb-6 sm:mb-4 mb-4">
        <div className="flex justify-between space-x-6">
            <input onkeydown={() => this.SearchApi(this.state.value)} value={this.state.value} onChange={this.handleChange} placeholder="what's in your mind...?" className="xl:text-4xl lg:text-2xl md:text-xl font-thin text-xl my-auto hover:border-yellow-300 transition focus:outline-none focus:border-black px-2 text-white border-b-2 border-blue-100 w-full h-10 bg-transparent py-2" type='search' />
            <button onClick={() => this.SearchApi(this.state.value)} className="hover:text-black focus:text-white transition sm:p-3 md:p-4 lg:p-4 p-3 rounded-full text-blue-500 transform hover:scale-95 motion-reduce:transform-none bg-blue-100 focus:bg-black hover:bg-yellow-300"><i className="fa fa-search my-auto align-middle flex justify-center"></i></button>
        </div></div>
                {(this.state.placeTitle).map((title,i) => (
                    <Job link={this.state.placeLink[i]} key={i} img={this.state.placeImg[i]} title={title} description={this.state.contact[i]} location={ this.state.placeLocation[i]} price={this.state.price[i]} />
                ))}
                    </div>
        );
    }
}

export default Home;

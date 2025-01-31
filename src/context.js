import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  /** Get Data  */
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      featuredRooms: featuredRooms,
      loading: false,
      sortedRooms: rooms,
      rooms,
      price: maxPrice,
      maxPrice,
      maxSize
    });
    /** if varibale name and array property name is same then no need to wirte assigneble method just return like rooms */
  }

  /** get room details */
  getRoom = slug => {
    //let tempRooms = [...this.state.rooms];
    let tempRooms = this.state.rooms;
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  formatData(itemsArr) {
    let tempItems = itemsArr.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, images: images, id };
      /** oter way 
       * if varible and array item name is same then no need to wirte bith just return item name 
       * let room = { ...item.fields, images, id };
       */
      return room;
    });
    return tempItems;
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };

import ClassRoom from "./0-classroom.js";

export default function initializeRooms() {
    const array = [19, 20, 34];
    return array.map(size => new ClassRoom(size));
}

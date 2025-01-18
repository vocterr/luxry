import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export const calculateStars = (rating: number) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<BsStarFill key={i} className="text-yellow-500" />);
        } else if (rating > i - 1 && rating < i) {
            stars.push(<BsStarHalf key={i} className="text-yellow-500" />);
        } else {
            stars.push(<BsStar key={i} className="text-gray-500" />);
        }
    }
    return stars;
};

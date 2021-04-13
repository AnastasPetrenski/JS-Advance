function creatRect(width, height){
    const rect = { width, height};

    rect.getArea = () => {
        return rect.width * rect.height;
    };

    return rect;
}

const result = creatRect(4, 6);
console.log(result.getArea());

const getArea = result.getArea;
console.log(getArea());
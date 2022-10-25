let cart = []

function cartAction(action,item) {
    switch(action) {
        case "Add":
            cart.push(item);
            break;
        case "Remove":
            cart.splice(cart.indexOf(item),1);
            break;
        case "Remove All":
            count = 0
            for(i=0;i<cart.length;i++){
                if (cart[i] == item){
                    count += 1
                }

            }
            cart.splice(cart.indexOf(item),count);
            break;
        case "Empty":
            cart = [];
            break;
        case "Show":
            console.log(cart);
            break;

    }
}

cartAction("Show")
cartAction("Add","Pants")
cartAction("Add","Pants")
cartAction("Show")

cartAction("Remove","Pants")
cartAction("Show")

cartAction("Add","Pants")
cartAction("Add","Pants")
cartAction("Add","Pants")
cartAction("Show")
cartAction("Empty")
cartAction("Show")

cartAction("Add","Hats")
cartAction("Add","Hats")
cartAction("Add","Hats")
cartAction("Add","Pants")
cartAction("Add","Pants")
cartAction("Add","Pants")


cartAction("Show")
cartAction("Remove All","Pants")
cartAction("Show")
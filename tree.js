/**
*@author André Filho
*				MIT License
			
*Here we're going to build a tree in JavaScript.
*Trees are structures that let us do a search in a time of O(log n).
*
*Some geometric visualization concerning them:
*
*                   5
*                3     7
*               1 4   6 8
*Basically, bigger elements go to the right of their parents and the smaller ones go to the left.
*/

class Node{
    /*
    This will be the leaves of our tree, which we're going to call "Node"
    just because some other data structures use it this way as well.    
    Also, if you consider that trees are actually graphs, leaves are always nodes
    */
    constructor(value){
        this.parent = null;
        this.left = null;
        this.right = null;
        this.value = value;
    }

    how_many_sons(){
        /*This will tell us how many sons does a node have.
        It will be important because we're going to determine
        which way of deleting a node we're going to use depending
        on this result.
        */
        var sons = null
        if((this.left == null)&&(this.right == null)){
            sons = 0;
        }
        else if((this.left == null)||(this.right == null)){
            sons = 1;
        }
        else{
            sons = 2;
        }
        return sons;
    }
}

class Tree{
    //Here lies our main tree class 
    constructor(){
        this.first = null;
    }

    insert(x){
        /*
        This method will take the value of a new node as a parameter
        Besides that, it will just add the element that are bigger than their parents
        at their right, and the smaller ones at the left
        */
        var current = this.first;
        let new_node = new Node(x);
        if(current == null){
            this.first = new_node;
        }
        else{
            var finished = false;
            while(!finished){
                if(new_node.value > current.value){
                    if(current.right == null){
                        finished = true;
                        current.right = new_node;
                        new_node.parent = current;
                    }
                    else{
                        current = current.right;
                    }
                }
                else{
                    if(current.left == null){
                        finished = true;
                        current.left = new_node;
                        new_node.parent = current;
                    }
                    else{
                        current = current.left;
                    }
                }
            }
        }
    }

    search(x){
        var finished = false;
        var current = this.first;
        while(!finished){
            if(current == null){
                finished = true;
                console.error("There are no elements on this Tree!");
            }
            else if(x > current.value){
                if(current.right == null){
                    finished = true;
                    console.error("There is no such element on the Tree!");
                    return [false,false];
                }
                else{
                    current = current.right;
                }
            }
            else if(x == current.value){
                finished = true;
                return [true, current];
            }
            else{
                if(current.left == null){
                    finished = true;
                    console.error("There is no such element on the Tree!");
                    return [false,false];
                }
                else{
                    current = current.left;
                }
            }
        }
    }

    delete(x){
        let results = this.search(x);
        if(results[0]){
            let sons = results[1].how_many_sons();
            if(sons == 0){
                this.delete_0(results[1]);
            }
            else if(sons == 1){
                this.delete_1(results[1]);
            }
            else{
                this.delete_2(results[1]);
            }
        }
    }

    delete_0(x){
        if(x.value > x.parent.value){
            x.parent.right = null;
        }
        else{
            x.parent.left = null;
        }
        console.log(x.value);
    }

    delete_1(x){
        if(! x.right==null){
            if(x.value > x.parent.value){
                x.parent.right = x.right;
            }
            else{
                x.parent.left = x.right;
            }
        }
        else{
            if(x.value > x.parent.value){
                x.parent.right = x.left;
            }
            else{
                x.parent.left = x.left;
            } 
        }
        console.log(x.value);
    }

    delete_2(x){
        var finished = false;
        var atual = x.right;
        while(! finished){
            if(atual.left == null){
                var old_x = x.value;
                x.value = atual.value;
                atual.parent = null;
                finished = true;
                if(atual == x.right){
                    x.right = null;
                }
                else{
                    atual.parent.left = null;
                }
            }
            else{
                atual = atual.left;
            }
        }
        console.log(old_x);
    }
}
//to do: comment the rest of the code.
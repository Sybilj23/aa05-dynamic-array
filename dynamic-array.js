class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    return this.data[index];
  }

  push(val) {
    if(this.length >= this.capacity){
      this.resize(this.capacity*2)
    }
    this.data[this.length] = val
    this.length++
  }

  pop() {
    if(this.length === 0){
      return undefined;
    }
    let popped = this.data[this.length-1];
    this.data[this.length -1 ] = undefined;
    this.length--;
    return popped;
  }
  shift() {
    if(this.length === 0){
      return undefined;
    }
    let shiftVal = this.data[0]
    for(let i =0; i < this.length; i++){
      this.data[i -1] = this.data[i]
    }
    this.data[this.length -1] = undefined
    this.length --;
    return shiftVal
  }

  unshift(val) {
  if(this.length >= this.length){
    this.resize(this.capacity*2)
  }
  for(let i = this.length; i > 0; i--){
    this.data[i] = this.data[ i- 1]
  }

this.data[0] = val;
this.length++;
  }

  indexOf(val) {
    for(let i = 0; i< this.length; i++){
      if(this.data[i]=== val){
        return i;
      }
    }
    return -1
  }

  resize(newCapacity) {
    const newData = new Array(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity = newCapacity;
}
}

module.exports = DynamicArray;
// test

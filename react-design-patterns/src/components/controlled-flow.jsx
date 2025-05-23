import React from 'react'

const ControlledFlow = ({children, onDone, currentIndex, onNext}) => {

    const validChildren = children.filter(element => React.isValidElement(element))

    const goNext = (dataFromStep) => {
        onNext(dataFromStep)
        

        if(currentIndex === validChildren.length - 1) {
            onDone(dataFromStep)
        }
    }
    

    const currentChild = validChildren[currentIndex]

    if(React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goNext})
    }

    return currentChild
}

export default ControlledFlow

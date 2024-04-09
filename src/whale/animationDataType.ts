interface rotation {
    x:number,
    y:number,
    z:number
}

interface position {
    x:number,
    y:number,
    z:number
}

interface dataAnimation {
    position:position,
    rotation:rotation
}

export type { dataAnimation }


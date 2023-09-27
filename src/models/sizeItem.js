class SizeItem {
    constructor(
    id,
    regionIds,
    name,
    width,
    length,
    unit
    )
    {
        this.id = id;
        this.regionIds = regionIds;
        this.name = name;
        this.width = width;
        this.length = length;
        this.unit = unit
    };

    sizeInCm() {
        if (this.unit == "cm"){
            return this;
        }
        else{
            return new SizeItem(
                this.id,
                this.regionIds,
                this.name,
                this.width * 2.54,
                this.length * 2.54,
                "cm"
            )
        }
    }
}

export default SizeItem;
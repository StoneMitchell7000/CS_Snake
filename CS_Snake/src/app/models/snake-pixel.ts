export class SnakePixel {
    public x: number;
    public y: number;
    public type: string;

    constructor(obj?: any) {
        this.x = obj && obj.x || 0;
        this.y = obj && obj.y || 0;
        this.type = obj && obj.type || null;
    }
}

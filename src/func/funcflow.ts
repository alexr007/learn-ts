async function pipe_a2(fns: Array<Function>): Promise<any> {
  let y = await fns[0].call(this);
  for (let i = 1; i < fns.length; i++) {
    y = await fns[i].call(this, y);
  }
  return y;
}

export class FuncFlow {
  private functions: Array<Function> = [];

  public static from(first: Function): FuncFlow {
    return new FuncFlow(first);
  }

  constructor(first: Function) {
    this.functions.push(first);
  }

  public chain(next: Function): FuncFlow {
    this.functions.push(next);
    return this;
  }

  public async fold() {
    return pipe_a2(this.functions);
  }

  public then(f: Function) {
    this.fold().then(r => f(r));
  }

}

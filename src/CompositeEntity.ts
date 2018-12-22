export namespace CompositeEntity {
  class DependentObject1 {
    private data: string;
    setDate(data: string) {
      this.data = data;
    }
    getData() {
      return this.data;
    }
  }

  class DependentObject2 {
    private data: string;
    setData(data: string) {
      this.data = data;
    }
    getData() {
      return this.data;
    }
  }

  class CoarseGrainedObject {
    do1 = new DependentObject1();
    do2 = new DependentObject2();

    setData(data1: string, data2: string) {
      this.do1.setDate(data1);
      this.do2.setData(data2);
    }
    getData() {
      return [this.do1.getData(), this.do2.getData()];
    }
  }

  class CompositeEntity {
    private cgo = new CoarseGrainedObject();
    setData(data1: string, data2: string) {
      this.cgo.setData(data1, data2);
    }
    getData() {
      return this.cgo.getData();
    }
  }

  export class client {
    private compositeEntity = new CompositeEntity();
    printData() {
      for (let i = 0; i < this.compositeEntity.getData().length; i++) {
        console.log("Data: " + this.compositeEntity.getData()[i]);
      }
    }
    setData(data1: string, data2: string) {
      this.compositeEntity.setData(data1, data2);
    }
  }
}

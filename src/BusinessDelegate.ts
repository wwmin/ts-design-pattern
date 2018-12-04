// 业务服务
interface BusinessService {
  doProcessing(): boolean;
}

class EJBService implements BusinessService {
  doProcessing(): boolean {
    console.log("Processing task by invoking EJBService");
    return true;
  }
}

class JMSService implements BusinessService {
  doProcessing(): boolean {
    console.log("Processing task by invoking JMS Service");
    return true;
  }
}

class BusinessLookUp {
  public getBusinessService(serviceType: string): BusinessService {
    if (serviceType.toLocaleLowerCase() === "ejb") {
      return new EJBService();
    } else {
      return new JMSService();
    }
  }
}

export class BusinessDelegate {
  private lookUpService: BusinessLookUp = new BusinessLookUp();
  private businessService: BusinessService = {} as BusinessService;
  private serviceType: string = "";
  setServiceType(serviceType: string) {
    this.serviceType = serviceType;
  }
  doTask(): boolean {
    this.businessService = this.lookUpService.getBusinessService(
      this.serviceType
    );
    return this.businessService.doProcessing();
  }
}

export class Client {
  businessService: BusinessDelegate;
  constructor(businessService: BusinessDelegate) {
    this.businessService = businessService;
  }
  doTask(): boolean {
    return this.businessService.doTask();
  }
}

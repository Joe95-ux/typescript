interface UserInfo {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrial(): string;
    getCoupon(couponName: string, value:number): number


}

// interfaces can be extended
interface moreInfo extends UserInfo{
    role?: string
}


const customer: moreInfo  = {
    dbId: 22,
    email: "customer@gmail.com",
    userId: 44,
    googleId: "#2647488",
    startTrial: ()=> "trial started",
    getCoupon: (name:"coup24", off:10) => 22,
}

export {}
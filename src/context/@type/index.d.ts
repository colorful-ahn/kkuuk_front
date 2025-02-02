interface ISellerInfo {
    username : string | undefined;
    email : string | undefined;
    ACCESS_TOKEN : string;
    ACCESS_TOKEN_VAL : string;
    
}
interface ISellerModal{
    onoff : boolean;
    msg : string;
}

interface ISellerContext{
    sellerInfo : ISellerInfo | undefined;
    setSellerInfo : sellerInfo;
    sellerModal : ISellerModal;
    setSellerModal : sellerModal;
    sellerSet : ()=>void;

}
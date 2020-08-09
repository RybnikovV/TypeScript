//Нужны для структурирования кода при присутствии однотипных элементах
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard; //1
const membershipRevers = Membership[2];

console.log(membership);
console.log(membershipRevers);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INST = `INSTAGRAMM`
};

const social = SocialMedia.INST; // 'INSTAGRAMM'
console.log(social);
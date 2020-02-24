enum Membership{
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
const membershipRevers = Membership[2];

console.log(membership);
console.log(membershipRevers);

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INST = `INSTAGRAMM`
};

const social = SocialMedia.INST;
console.log(social);
import React from 'react';
import {mount} from 'enzyme';
import Fixture from './../index';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
const testStore = mockStore({
    leagues:
        {
            data: {
                leagues: {},
                current: 0
            },
        }
});

const gameTestWithoutScore = {
    "sys": {
        "space": {
            "sys": {
                "type": "Link", "linkType": "Space", "id": "w9v8tyww8nf0"
            }
        },
        "id": "2gh4P4Fh32MuSUSG0qWWy4",
        "type": "Entry",
        "createdAt": "2017-06-29T05:38:36.437Z",
        "updatedAt": "2017-07-13T09:07:50.203Z",
        "revision": 6,
        "contentType": {
            "sys": {
                "type": "Link", "linkType": "ContentType", "id": "fixture"
            }
        },
        "locale": "en-US"
    },
    "fields": {
        "name": "Kot F - Szymon K", "homeScore": '', "awayScore": '',
        "homePlayer": {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link", "linkType": "Space", "id": "w9v8tyww8nf0"
                    }
                },
                "id": "LMKiMn8Vc4q4QwasYCsCu",
                "type": "Entry",
                "createdAt": "2017-06-29T05:36:31.523Z",
                "updatedAt": "2017-06-29T05:36:31.523Z",
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link", "linkType": "ContentType", "id": "player"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "name": "Kot F",
                "user": {
                    "sys": {
                        "type": "Link", "linkType": "Entry", "id": "4eS22qfVDisCgEuogUkQU8"
                    }
                }
            }
        },
        "awayPlayer": {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link", "linkType": "Space", "id": "w9v8tyww8nf0"
                    }
                },
                "id": "7lFCUqNI5iwymiksiGGSEA",
                "type": "Entry",
                "createdAt": "2017-06-29T05:34:41.786Z",
                "updatedAt": "2017-06-29T05:34:41.786Z",
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link", "linkType": "ContentType", "id": "player"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "name": "Szymon K",
                "user": {
                    "sys": {
                        "type": "Link", "linkType": "Entry", "id": "3lA4iXsfgQYOKUAgiIiSIO"
                    }
                }
            }
        },
        "confirmed": "No"
    }
};

const gameTestWithScore = {
    "sys": {
        "space": {
            "sys": {
                "type": "Link", "linkType": "Space", "id": "w9v8tyww8nf0"
            }
        },
        "id": "2gh4P4Fh32MuSUSG0qWWy4",
        "type": "Entry",
        "createdAt": "2017-06-29T05:38:36.437Z",
        "updatedAt": "2017-07-13T09:07:50.203Z",
        "revision": 6,
        "contentType": {
            "sys": {
                "type": "Link", "linkType": "ContentType", "id": "fixture"
            }
        },
        "locale": "en-US"
    },
    "fields": {
        "name": "Kot F - Szymon K", "homeScore": 4, "awayScore": 3,
        "homePlayer": {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link", "linkType": "Space", "id": "w9v8tyww8nf0"
                    }
                },
                "id": "LMKiMn8Vc4q4QwasYCsCu",
                "type": "Entry",
                "createdAt": "2017-06-29T05:36:31.523Z",
                "updatedAt": "2017-06-29T05:36:31.523Z",
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link", "linkType": "ContentType", "id": "player"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "name": "Kot F",
                "user": {
                    "sys": {
                        "type": "Link", "linkType": "Entry", "id": "4eS22qfVDisCgEuogUkQU8"
                    }
                }
            }
        },
        "awayPlayer": {
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link", "linkType": "Space", "id": "w9v8tyww8nf0"
                    }
                },
                "id": "7lFCUqNI5iwymiksiGGSEA",
                "type": "Entry",
                "createdAt": "2017-06-29T05:34:41.786Z",
                "updatedAt": "2017-06-29T05:34:41.786Z",
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link", "linkType": "ContentType", "id": "player"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "name": "Szymon K",
                "user": {
                    "sys": {
                        "type": "Link", "linkType": "Entry", "id": "3lA4iXsfgQYOKUAgiIiSIO"
                    }
                }
            }
        },
        "confirmed": "Yes"
    }
};

describe('testing Fixture', () => {
    test('game without result yet', () => {
        const wrapper = mount(<Fixture game={gameTestWithoutScore}/>, {context: {store: testStore}});
        expect(wrapper.find('div.addScore').find('span').text()).toEqual('Add score');
    });

    test('game with result yet', () => {
        const wrapper = mount(<Fixture game={gameTestWithScore}/>, {context: {store: testStore}});
        expect(wrapper.find('div.addScore').exists()).toEqual(false);
    });
});
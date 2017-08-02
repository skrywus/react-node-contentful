import React from 'react';
import {shallow} from 'enzyme';
import LeagueFixtures from './../index';
import Fixture from './../../Fixture';

const testFixtures = [{
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
        "name": "Kot F - Szymon K", "homeScore": 5, "awayScore": 4,
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
    },
    {
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
            "name": "Kot F - Szymon K", "homeScore": 5, "awayScore": 4,
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
}];

test('render LeagueFixtures without crash', () => {
    const wrapper = shallow(<LeagueFixtures fixtures={testFixtures} confirmed={true} limit={5}/>);
    expect(wrapper.children().length === 2).toEqual(true);
});
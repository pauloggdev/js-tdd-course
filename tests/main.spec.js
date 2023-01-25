// global.fetch = require('node-fetch');
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';





chai.use(sinonChai);
sinonStubPromise(sinon);


global.fetch = require('node-fetch')






import { search, searchAlbums, searchArtists, searchTracks, searchPlayLists } from '../src/main';


describe('Spotify wrapper', () => {
    describe('Smoke tests', () => {
        it('should exist the search method', () => {
            expect(search).to.be.exist;
        })
        it('should exist the searchAlbums method', () => {
            expect(searchAlbums).to.be.exist;
        })
        it('should exist the searchArtists method', () => {
            expect(searchArtists).to.be.exist;
        })
        it('should exist the searchTracks method', () => {
            expect(searchTracks).to.be.exist;
        })
        it('should exist the searchPlayLists method', () => {
            expect(searchPlayLists).to.be.exist;
        })

    })

    describe("Generic search", function () {

        let fetchedStub;

        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch'); //add stub
            fetchedStub.returnsPromise()
        })
        afterEach(() => {
            fetchedStub.restore();
        })

        it("Should call fetch function", function () {
            const artirts = search();
            expect(fetchedStub).to.have.been.calledOnce;

        })
        it("Should receive the correct url to fecth", function () {

            context("passing one type", () => {
                const artirts = search('Incubus', 'artist');
                expect(fetchedStub).to.have.been.calledWith(`https://api.spotify.com/v1/search=?q=Incubus&type=artist`);

                const arbums = search("Incubus", "albums")
                expect(fetchedStub).to.have.been.calledWith(`https://api.spotify.com/v1/search=?q=Incubus&type=albums`);
            })

            context("passing more the one type", () => {
                const artistAndAlbums = search("Incubus", ["artist", "albums"])
            })


        })
    })


})
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Slider from "react-slick";
import swal from 'sweetalert';


import _gejala from '../../data/gejala';
import diagnosa from '../../data/diagnosa';
import YoutubeEmbed from '../widgets/YoutubeEmbed';

const attention = [
    'Anda akan disajikan 43 pilihan terkait gejala yang mungkin terdapat pada Ayam Anda, klik ceklis pada box jika benar.',
    'Saat melakukan diagnosa anda dapat melakukan pencarian terhadap gejala dengan mengetikan kata kunci pada kolom pencarian',
    'Hasil akhir akan ditampilkan setelah anda selesai melakukan pemilihan pada gejala dan melakukan klik pada tombol selesai.',
    'Anda dapat menyimpan riwayat diagnosa anda setelah menyelesaikan Diagnosa.'
]

const Diagnosa = (props) => {
    const [page, setPage] = useState(1);
    const [pageA, setPageA] = useState(0);
    const [gejala, setGejala] = useState(_gejala.map(e => ({ ...e, isShown: true })))
    const [selectedGejala, setSelected] = useState([]);


    const [result, setResult] = useState([]);
    const [approach, setApproach] = useState([]);

    function _search(keyword) {
        setGejala((state) => {
            let temp = _gejala.map((e) => {
                if ((e.keterangan.toUpperCase()).includes(keyword.toUpperCase())) {
                    return {
                        ...e,
                        isShown: true,
                    }
                } else {
                    return {
                        ...e,
                        isShown: false,
                    }
                }
            })
            let selected = selectedGejala.filter(e => e.isChecked);
            selected = selected.map(e => e.kode);
            console.log(selected);
            temp = temp.map(e => {
                if (selected.includes(e.kode)) {
                    return {
                        ...e,
                        isChecked: true
                    }
                } else {
                    return e
                }
            })
            return temp
        })
    }

    function next() {
        if (pageA !== attention.length - 1) {
            setPageA(pageA + 1);
        } else {
            setPage(page + 1)
        }
    }

    function _select(kode) {
        setGejala((state) => {
            let temp = state.map((e) => {
                if (e.kode === kode) {
                    return {
                        ...e,
                        isChecked: !e.isChecked
                    }
                } else {
                    return e
                }
            })

            setSelected(temp.filter(e => e.isChecked))
            return temp
        })
    }

    useEffect(() => {
        console.log(gejala);
    }, [gejala])

    function done() {
        swal({
            title: 'Sudah Yakin dengan diagnosa yang anda pilih?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,

        }).then((agree) => {
            if (agree) {
                let selected = selectedGejala.map(e => e.kode);
                console.log(JSON.stringify(selected));
                let temp = diagnosa.filter(e => JSON.stringify(e.rule) === JSON.stringify(selected))
                let approachTemp = diagnosa.filter(e => {
                    let count = 0;
                    let index = 0;
                    selected.map(a => {
                        for (let i = 0; i < e.rule.length; i++) {
                            if (e.rule[i] === a) {
                                count++;
                            }
                        }
                    })
                    let minCount = Math.round((70 / 100) * e.rule.length)
                    if (count >= minCount) {
                        return true
                    } else {
                        return false
                    }
                    // JSON.stringify(e.rule).includes(JSON.stringify(selected))
                })
                console.log('penyakit dengan gejala yang sesuai', temp);
                console.log('penyakit dengan gejala yang hampir sama', approachTemp);
                setResult(temp)
                setPage(3)
            }
        });

    }

    return (
        <div style={{ minHeight: '90vh', backgroundColor: '#582245' }} >
            {
                page === 1 && (
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 20 }} >
                        <Link className="btn btn-white" style={{ width: 120 }} to="/" >
                            Kembali
                        </Link>
                        <div style={{ width: '100%', minHeight: 400, position: 'relative', backgroundColor: 'white', borderRadius: 20, display: 'flex', marginTop: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
                            <div style={{ zIndex: 3 }} >
                                <h2>Perhatian!</h2>
                                <p style={{ fontWeight: 'bold', fontSize: 16 }}>{attention[pageA]}</p>
                            </div>
                            <img src={require('../../assets/img/ayam.png')} alt="" style={{
                                width: 150,
                                right: 0,
                                bottom: 0,
                                position: 'absolute',
                                zIndex: 1
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 30 }}>
                            <button className="btn btn-main" onClick={next}>
                                {pageA !== attention.length - 1 ? 'Selanjutnya' : 'Mulai'}
                            </button>
                        </div>
                    </div>
                )
            }
            {
                page === 2 && (
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 10, color: 'white' }} >
                        <Fade>
                            <h1>Tahap Diagnosa</h1>
                            <div style={{
                                width: '100%',
                                height: 40,
                                backgroundColor: 'white',
                                borderRadius: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0px 20px'
                            }}>
                                <input type="text" style={{
                                    width: '90%',
                                    height: '80%',
                                    fontSize: 16,
                                    outline: 'none',
                                    border: 'none'
                                }}
                                    placeholder='Cari gejala disini...'
                                    onChange={e => _search(e.target.value)}
                                />
                                <img src={require('../../assets/img/search.svg')} style={{
                                    width: '5%'
                                }} alt="" />
                            </div>
                        </Fade>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 30, paddingBottom: 30 }} >
                            {
                                gejala.length > 0 ? gejala.map((e, i) => (
                                    e.isShown && <Fade key={i}>
                                        <input id={e.kode} type='checkbox' value={e.kode} onChange={e => _select(e.target.value)} checked={e.isChecked} />
                                        <label htmlFor={e.kode}>
                                            <span></span>
                                            {e.keterangan}
                                            <ins><i>{e.keterangan}</i></ins>
                                        </label>
                                    </Fade>
                                )) : <div>Data tidak ditemukan</div>
                            }

                            <button className="btn btn-main" style={{ marginTop: 20 }} onClick={done} >
                                Selesai
                            </button>
                        </div>

                    </div>
                )
            }
            {
                page === 3 && (
                    <div style={{ width: '90%', margin: 'auto', paddingTop: 10, color: 'white' }} >
                        <Fade>
                            <h1>Hasil Diagnosa</h1>
                            <div style={{ width: '100%', minHeight: 400, position: 'relative', backgroundColor: 'white', borderRadius: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }} >
                                <div style={{ zIndex: 3, color: 'black', padding: 20 }} >
                                    <p>Hasil diagnosa yang anda lakukan sebelumnya {diagnosa[0].penyakit}</p>
                                    <p>{diagnosa[0].deskripsi}</p>
                                </div>
                                <img src={require('../../assets/img/ayam.png')} alt="" style={{
                                    width: 150,
                                    right: 0,
                                    bottom: 0,
                                    position: 'absolute',
                                    zIndex: 1
                                }} />
                            </div>
                        </Fade>
                        <Fade>
                            <h1 style={{marginTop: 40}}>Video Terkait Diagnosa</h1>
                            {
                                diagnosa[0].videos.map((e)=> (
                                    <YoutubeEmbed embedId={e} />
                                ))
                            }
                        </Fade>
                    </div>
                )
            }
        </div>
    )
}

export default Diagnosa;
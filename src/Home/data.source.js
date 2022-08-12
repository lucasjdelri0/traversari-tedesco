import React from 'react';
import { Input, Button, Row, Menu, Dropdown } from "antd";
import {
  MailOutlined,
  IdcardOutlined,
  UserOutlined,
  PhoneOutlined,
  InstagramOutlined,
  FacebookOutlined
} from "@ant-design/icons";

import { Trans } from 'react-i18next';
import i18n from "../i18n";
var loading = false;

const changeLanguage = lng => {
  i18n.changeLanguage(lng).then(resp => {
    console.log('Change language to: ', lng)
    console.log(resp)
  })
  .catch(error => {
    console.log(error)})
};


const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a onClick={() => changeLanguage('sp')}>
                      <Trans>
                        btn_language_spanish
                      </Trans>
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a onClick={() => changeLanguage('en')}>
                      <Trans>
                        btn_language_english
                      </Trans>
                    </a>
                ),
            },
        ]}
    />
);


const { TextArea } = Input;

export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper l59q48ajj1-editor_css' },
  page: { className: 'home-page l59q16780sh-editor_css' },
  logo: {
    className: 'header3-logo l65uurkqxl-editor_css',
    children: 'https://i.im.ge/2022/07/29/FwrkbW.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item3',
        className: 'item-menu',
        children: {
          children: [{ children: (
              <div style={{paddingTop: 10}}>
                <Dropdown overlay={menu} placement="bottom" arrow>
                  <Button>  <Trans>
                    btn_language
                  </Trans></Button>
                </Dropdown>
              </div>
            ), name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0 l66237937o-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title l6621xc87fo-editor_css',
    children: 'https://i.im.ge/2022/07/29/FwrkbW.png',
  },
  content: {
    className: 'banner0-content l66221er87j-editor_css',
    children: '一个高效的页面动画解决方案',
  },
  button: {
    className: 'banner0-button l662244en4-editor_css',
    children: 'Learn More',
  },
};
export const Teams00DataSource = {
  wrapper: {
    className: 'home-page-wrapper teams0-wrapper l65vwm0wumd-editor_css',
  },
  OverPack: {
    playScale: 0.3,
    className: 'home-page teams0 l65tz9aaqad-editor_css',
  },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper l65vop664te-editor_css',
          children: [
            {
              name: 'image',
              children: 'https://i.im.ge/2022/07/29/Fmvn8G.jpg',
              className: 'teams0-image l65wa7b12i6-editor_css',
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <Trans>
                                  introduction
                                  </Trans>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'teams0-content l57jjr8nctn-editor_css',
            },
            {
              name: 'title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <h3>Mario Tedesco</h3>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <h3>  <Trans>
                                  introduction_lawyer
                                  </Trans></h3>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'teams0-content l65w7fx38fg-editor_css',
            },
          ],
        },
      },
    ],
  },
};
export const Feature20DataSource = {
  wrapper: { className: 'home-page-wrapper content2-wrapper' },
  OverPack: { className: 'home-page content2', playScale: 0.3 },
  imgWrapper: { className: 'content2-img', md: 12, xs: 24 },
  img: {
    children: 'https://i.im.ge/2022/07/29/FwwSs6.jpg',
    className: 'l65vtggv2o7-editor_css',
  },
  textWrapper: {
    className: 'content2-text l65vthowlkh-editor_css',
    md: 12,
    xs: 24,
  },
  title: {
    className: 'content2-title',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>&nbsp;➮ Vía Materna</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content2-content l660z6e9jq-editor_css',
    children: (
      <span>
        <span>
          <p>
            Este caso es el más frecuente, y se presenta cuando en la línea de
            descendencia italiana iure sanguinis se encuentre una mujer (ya sea
            italiana o descendiente de italianos) que junto con un extranjero
            (“no italiano”) haya tenido un hijo/a nacido antes del 1 de enero de
            1948.
          </p>
        </span>
      </span>
    ),
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 12, xs: 24 },
  img: { children: 'https://i.im.ge/2022/07/29/FwwFUy.webp' },
  textWrapper: { className: 'content1-text', md: 12, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>‣&nbsp;Plazos de Espera</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'content1-content l660yl2kgxe-editor_css',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <p>
                    Este caso se presenta cuando las solicitudes enviadas por
                    los interesados, ya sean de carácter consular o
                    administrativo, enfrentan tiempos de espera que superan el
                    plazo máximo de 2 (dos) años previsto por la legislación
                    italiana para el tratamiento de solicitudes.
                  </p>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
export const Content90DataSource = {
  wrapper: {
    className: 'home-page-wrapper content9-wrapper l57ffz3eoz-editor_css',
  },
  page: { className: 'home-page content9 l57ffhdd5gt-editor_css' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image~l57kcgp1gjh',
        className: 'l65xh9oluba-editor_css',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>Pasos del Juicio</p>
          </span>
        ),
        className: 'title-h1 l65xcxbh5s-editor_css',
      },
      {
        name: 'content~l65xe61isf9',
        className: 'l65xe7794ze-editor_css',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            Si bien es difícil predecir con exactitud, tanto en
                            el caso de una solicitud de reconocimiento de la
                            ciudadanía por vía materna como en el caso de un
                            recurso debido a los plazos de espera, se puede
                            tomar como guía al tiempo medio de decisión de los
                            procedimientos ya concluidos, que actualmente es de
                            unos 24/30 meses.<br />
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'timeline l57ffwsdawo-editor_css',
    children: [
      {
        name: 'block1',
        className: 'block-wrapper l57ffbuuwmt-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57fi2w6m18-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                    <p>
                                      Previo a iniciar la causa, los interesados
                                      deben otorgar un poder “procura alle liti”
                                      al Dr. Tedesco para que los pueda
                                      representar frente a los tribunales
                                      italianos.<br />Junto a ello, deben
                                      entregar toda documentación que permita
                                      demostrar la descendencia iure sanguinis.
                                    </p>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time l57kemdn3mo-editor_css',
            children: (
              <span>
                <span>
                  <p>Previo a Juicio</p>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <p>Poder y Documentación</p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/Fwjf0J.png',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper l57l1erixwp-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57g6047k2d-editor_css',
            children: (
              <span>
                <span>
                  <p>
                    El Dr. Tedesco presenta una demanda contra el estado
                    italiano a fines de obtener el reconocimiento de la
                    ciudadanía de los interesados (demandantes).
                  </p>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper l57g4e4xm9-editor_css' },
          time: {
            className: 'block-time l57kehryrr8-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>Comienza el Juicio</p>
                  </span>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Demanda Formalizada</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/Fwjkgy.png',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper l57lp3kb9cc-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57hqtkvppt-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      Se inscribe la causa en el tribunal correspondiente, quien
                      le otorga un número de referencia denominado “numero di
                      ruolo”.
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <p>Inscripción en Tribunal</p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/Fwjkgy.png',
          },
        },
      },
      {
        name: 'block~l57fmx26c7i',
        className: 'block-wrapper l57lpexuoy-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57hv2u0zr-editor_css',
            children: (
              <span>
                <p>
                  Se transfiere la causa a una sección especial del tribunal
                  competente, quien, a su vez, le asigna a la misma (en caracter
                  aleatorio) un juez a cargo.
                </p>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <p>Asignación de Juez</p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/Fwjkgy.png',
          },
        },
      },
      {
        name: 'block~l57fn32p5ie',
        className: 'block-wrapper l57lpm8q1xb-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57hzos84uc-editor_css',
            children: (
              <span>
                <span>
                  <p>
                    Durante este período, el juez de turno se encarga de auditar
                    la causa y su documentación a fines de emitir una
                    resolución.
                  </p>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <p>Audiencia</p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/Fwjkgy.png',
          },
        },
      },
      {
        name: 'block~l57fn4hssra',
        className: 'block-wrapper l57lpsie94f-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57i1tmdjkn-editor_css',
            children: (
              <span>
                <p>
                  Luego de efectuar el proceso de auditoria, el juez de turno
                  emite una sentencia para la causa presentada.<br />Si en este
                  punto el estado italiano no impugna o bien no contesta la
                  misma, la sentencia se declara como un hecho.
                </p>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>Fin del Juicio</p>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>Sentencia</p>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/FwjVra.webp',
          },
        },
      },
      {
        name: 'block~l57iy5dadkj',
        className: 'block-wrapper l57i9da2lwh-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57i1tmdjkn-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  <p>
                                    Una vez emitida la sentencia, el Dr. Tedesco
                                    solicita el certificado “passaggio in
                                    giudicato” que permite a los interesados
                                    inscribir su sentencia en el consulado
                                    competente, momento a partir del cuál ya
                                    serán considerados como ciudadanos
                                    italianos.
                                  </p>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time l660caty2kp-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      Posterior a Juicio<br />
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>Inscripción en Consulado</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/FwjRSL.webp',
          },
        },
      },
      {
        name: 'block~l65z55qz82h',
        className: 'block-wrapper l57i9da2lwh-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57i1tmdjkn-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <p>
                                  Los recientemente declarados ciudadanos
                                  italianos deberán solicitar su inscripción en
                                  el registro AIRE (Anagrafe Italiani Residenti
                                  all’Estero) para finalmente poder acceder a su
                                  pasaporte italiano.
                                </p>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>AIRE y Pasaporte</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/07/29/FwjGfX.webp',
          },
        },
      },
      {
        name: 'block~l6q7zxbq16q',
        className: 'block-wrapper l57i9da2lwh-editor_css',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          content: {
            className: 'block-content l57i1tmdjkn-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                    <span>
                                      <p>
                                        Se puede tomar como guía al tiempo medio
                                        de decisión de los procedimientos ya
                                        concluidos, que actualmente es de unos
                                        24/30 meses.
                                      </p>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          textWrapper: { className: 'text-wrapper' },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>Tiempos del juicio</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          img: {
            className: 'block-img',
            children: 'https://i.im.ge/2022/08/12/OMdHYC.time-png.png',
          },
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Vía Administrativa</p>
          </span>
        ),
      },
      {
        name: 'content~l6q9ild3706',
        className: '',
        children: (
          <span>
            <p>
              Para más información sobre solicitudes de reconocimiento de
              ciudadanía por vía administrativa, comunicarse con nuestros
              partners.
            </p>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper l6q99624ah-editor_css',
    children: [
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item l6q993uqgoj-editor_css',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon l6q99jh2dbo-editor_css',
              href:"https://www.instagram.com/tanos_italia/?igshid=YmMyMTA2M2Y%3D",
              target:"_blank",
              children:
                'https://i.im.ge/2022/08/12/OMqne6.71619f11-4b9f-461c-aa45-b4f256daba71.jpg',
            },
            {
              name: 'contact-tanos',
              className: 'content0-block-icon l6q99jh2dbo-editor_css',
              href:"https://www.instagram.com/tanos_italia/?igshid=YmMyMTA2M2Y%3D",
              target:"_blank",
              children:
                    <div className='content0-block-contact-tanos'>
                     <InstagramOutlined style={{ fontSize: '30px', marginRight: 10}} />
                    </div>
            },
            {
              name: 'contact-tanos',
              className: 'content0-block-icon l6q99jh2dbo-editor_css',
              href:"https://www.facebook.com/TanosItalia",
              target:"_blank",
              children:
                      <div className='content0-block-contact-tanos'>
                        <FacebookOutlined style={{ fontSize: '30px', marginLeft: 50}}/>
                      </div>
            },
          ],
        },
      },
    ],
  },
};
export const Content111DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper l65w3sp2e8-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper l57mblpsdmf-editor_css',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>Contacto</p>
          </span>
        ),
        className: 'title-h1 l57m7r6nrnf-editor_css',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <span>
                <p>
                  Contáctenos sin demora completando el siguiente formulario o
                  llamando directamente al <b>+39 351 8017252</b> para
                  obtener la asistencia que necesita en su caso específico
                </p>
              </span>
            </span>
          </span>
        ),
        className: 'title-content l57m8a95e9j-editor_css',
      },
      {
        name: "frm-contact",
        children: (
            <form action="https://formsubmit.co/enzoimola@hotmail.com" method="POST">
              <div style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Input
                      placeholder="Nombre(s)"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      allowClear
                      name="Name"
                      style={{ marginBottom: 16, marginRight: 8 }}
                      // suffix={
                      //   <Tooltip title="Extra information">
                      //     <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      //   </Tooltip>
                      // }
                      required
                  />
                  <input type="hidden" name="_subject" value="New email!"/>
                  <Input
                      placeholder="Apellido(s)"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      allowClear
                      name="Lastname"
                      style={{ marginBottom: 16 }}
                      // suffix={
                      //   <Tooltip title="Extra information">
                      //     <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      //   </Tooltip>
                      // }
                      required
                  />
                </div>
                <Input
                    placeholder="Correo"
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    allowClear
                    style={{ marginBottom: 16 }}
                    type="email"
                    name="Email"
                    // suffix={
                    //   <Tooltip title="Extra information">
                    //     <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    //   </Tooltip>
                    // }
                    required
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Input
                      placeholder="Nacionalidad"
                      prefix={<IdcardOutlined className="site-form-item-icon" />}
                      allowClear
                      name="Nationality"
                      style={{ marginBottom: 16, marginRight: 8 }}
                      // suffix={
                      //   <Tooltip title="Extra information">
                      //     <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      //   </Tooltip>
                      // }
                      required
                  />
                  <Input
                      placeholder="Telefono"
                      prefix={<PhoneOutlined />}
                      allowClear
                      name="Phone"
                      style={{ marginBottom: 16 }}
                      // suffix={
                      //   <Tooltip title="Extra information">
                      //     <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                      //   </Tooltip>
                      // }
                      required
                  />
                </div>
                <TextArea
                    rows={4}
                    placeholder="Mensaje"
                    maxLength={300}
                    showCount
                    name="Message"
                    style={{ marginBottom: 16 }}
                    required
                />
                <button
                    type="submit"
                    style={{ marginTop: 20 }}
                >
                  Enviar
                </button>
              </div>
            </form>
        ),
        className: "title-content",
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: '', href: '', children: '' } },
  },
};
export const Footer10DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer1-wrapper l57m0kkeea-editor_css',
  },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page l57m0ifizd-editor_css',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo l59tb1ubz7j-editor_css',
          children:
            'https://www.linkpicture.com/q/identidad-mario-tesc-06_2.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                    <p>
                                      Solicitudes de reconocimiento de
                                      Ciudadanía Italiana&nbsp;“Iure Sanguinis”
                                    </p>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'l57m522ytw-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block l57m8fdv4gq-editor_css',
        title: {
          children: (
            <span>
              <p>Servicios</p>
            </span>
          ),
          className: 'l57m7yino6g-editor_css',
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '',
              children: (
                <span>
                  <p>Asesoramiento</p>
                </span>
              ),
              className: 'l57m8ef96b-editor_css',
            },
            {
              name: 'link2',
              href: '',
              children: (
                <span>
                  <span>
                    <p>AIRE</p>
                  </span>
                </span>
              ),
              className: 'l662w6x64t-editor_css',
            },
            {
              name: 'link3',
              href: '',
              children: (
                <span>
                  <p>Pasaporte</p>
                </span>
              ),
              className: 'l663krc44cm-editor_css',
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block l57m9vag6uh-editor_css',
        title: {
          children: (
            <span>
              <p>Contacto</p>
            </span>
          ),
          className: 'l57m85qbe6-editor_css',
        },
        childWrapper: {
          children: [
            {
              href:
                'https://www.linkedin.com/in/traversari-tedesco-studio-legale-cassazionista-08532423a/',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <p>LinkedIn</p>
                  </span>
                </span>
              ),
              target: '_blank',
              className: 'l663f86vzr-editor_css',
            },
            {
              href: 'https://www.facebook.com/marittiello69',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>Facebook</p>
                  </span>
                </span>
              ),
              target: '_blank',
              className: 'l663mkvd54-editor_css',
            },
          ],
        },
      },
      {
        name: 'block~l6646lihl5a',
        xs: 24,
        md: 6,
        className: 'block l57m9vag6uh-editor_css',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <p>Vía Administrativa</p>
                </span>
              </span>
            </span>
          ),
          className: 'l57m85qbe6-editor_css',
        },
        childWrapper: {
          children: [
            {
              href: '',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            Para más información sobre solicitudes de
                            reconocimiento de ciudadanía por vía administrativa,
                            comunicarse con nuestros partners.
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              target: '',
              className: 'l663mkvd54-editor_css',
            },
            {
              href:
                'https://www.instagram.com/tanos_italia/?igshid=YmMyMTA2M2Y%3D',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Tanos Italia (Vía Administrativa)</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              target: '_blank',
              className: 'l663f86vzr-editor_css',
            },
          ],
          className: 'l6qa25dhoeo-editor_css',
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright l57m0rpsrl-editor_css',
    children: (
      <span>
        <span>
          <span>
            <p>Mario Tedesco</p>
          </span>
        </span>
      </span>
    ),
  },
};

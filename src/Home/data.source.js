import React from 'react';
import { Trans } from 'react-i18next';
import { Button } from "antd";
import i18n from "../i18n";

const changeLanguage = lng => {
  i18n.changeLanguage(lng);
  console.log('cambio', lng)
};


export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page l4lj6en6d8i-editor_css' },
  logo: {
    className: 'header2-logo',
    children:
      'https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: '',
        className: 'menu-item',
      },
      {
        name: "internationalization",
        children: (
                <Button  type="primary"  onClick={() => changeLanguage('fr')
                    }
                >   Change language
                </Button>
                  ),
          className: 'menu-item'
      }
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  Menu: {
    children: [
      {
        name: 'Banner3_0',
        to: 'Banner3_0',
        children: '首页',
        className: 'active menu-item',
      },
      {
        name: 'Content8_0',
        to: 'Content8_0',
        children: '特邀嘉宾',
        className: 'menu-item',
      },
      {
        name: 'Content9_0',
        to: 'Content9_0',
        children: '会议日程',
        className: 'menu-item',
      },
      {
        name: 'Content10_0',
        to: 'Content10_0',
        children: '大会地址',
        className: 'menu-item',
      },
      {
        name: 'Content11_0',
        to: 'Content11_0',
        children: '展台展示',
        className: 'menu-item',
      },
      {
        name: 'Content12_0',
        to: 'Content12_0',
        children: '特别鸣谢',
        className: 'menu-item',
      },
    ],
  },
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title l4ljbzl6n3u-editor_css',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          <b>
                            Traversari&nbsp;<span>
                              Tedesco
                            </span>
                          </b>
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: 'banner2-content l4lkvmx7zlr-editor_css',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            <b>
                              <Trans>Welcome to React</Trans>
                              Reconocimiento de la ciudadania italiana a
                              descendientes italianos
                            </b>
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        button: {
          className: 'banner2-button',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>Ver mas</p>
                  </span>
                </span>
              </span>
            </span>
          ),
          href: '',
        },
      },
    ],
  },
};
export const Feature30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
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
                              Nuestro bufete se especializa en solicitudes de
                              reconocimiento de ciudadanía italiana por
                              descendencia, los llamados{' '}
                              <i>
                                <b>"Iure Sanguinis"</b>
                              </i>{' '}
                              para los descendientes de antepasados italianos
                              que emigraron al extranjero.
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
        className: 'title-h1 l4ldeprccr-editor_css',
      },
      {
        name: 'content',
        className: 'title-content l4ldf7hm0gg-editor_css',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>
                    Nos ocupamos de todos los aspectos relacionados con el
                    procedimiento necesario para obtener el reconocimiento de la
                    ciudadanía italiana
                  </p>
                </span>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Búsqueda de alojamiento </p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Búsqueda de alojamiento en el que establecer la residencia
                    en Italia
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Búsqueda de documentos</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Evaluamos la documentación disponible, orientando y asistiendo
                  a los Clientes en la obtención de los documentos faltantes.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Evaluación de los documentos</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Realizamos una pre-investigación de la práctica, valorando
                    la existencia de las condiciones para dar curso a la
                    solicitud indicando el camino a seguir más adecuado.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>Asistencia en actividades de formación</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Asistencia en la búsqueda de actividades de formación y/o la
                    colaboración relativa a la aptitudes y trayectorias
                    profesionales de los solicitantes.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>Seguimiento personalizado</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Durante todo el proceso del procedimiento mantenemos un
                  control constante del avance del expediente, previendo también
                  el envío de avisos y recordatorios en caso de que no se
                  reciban las respuestas en los plazos fijados. por la
                  legislación italiana.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Solicitud del pasaporte Italiano</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Solicitud del pasaporte italiano en Italia o en el Consulado
                  italiano con jurisdicción territorial.
                </p>
              </span>
            ),
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
            <span>
              <span>
                <p>
                  Requisitos para iniciar la solicitud de la ciudadania italiana
                </p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <p>Descendencia de una persona italiana</p>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>
                      Tanto el ascendiente como sus descendientes no deben
                      haberse naturalizado ciudadanos extranjeros antes del
                      nacimiento de sus respectivos descendientes y hasta los
                      solicitantes.<br />
                      <br />
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>Documentación</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>
                      Es indispensable presentar los registros completos de
                      nacimiento, matrimonio y defunción tanto del ascendiente
                      italiano como de cada descendiente, incluido el
                      solicitante que, si se formó en el extranjero, debe estar
                      todo traducido al italiano y provisto de legalización
                      consular o apostilla, si el Estado en La cuestión se
                      adhiere a la Convención de La Haya de 1961.
                    </p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>??</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>---</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
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
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            Italia es la única nación que permite a los
                            descendientes de antepasados italianos que emigraron
                            al extranjero la posibilidad de obtener el
                            reconocimiento de la ciudadanía italiana{' '}
                            <b>
                              <i>iure sanguinis</i>
                            </b>{' '}
                            sin límite generacional alguno.<br />Reconocimiento
                            que se obtiene presentando toda la documentación
                            necesaria - actas de nacimiento, matrimonio y
                            defunción, comenzando por el ascendiente italiano y
                            gradualmente hasta los solicitantes.<br />
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
        className: 'title-h1 l4lf2dnebee-editor_css',
      },
    ],
  },
  block: {
    className: 'timeline l4lghhtltd-editor_css',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: {
            className: 'block-name',
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
                                    <br />
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
          post: {
            className: 'block-post',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          <br />
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <h2>
                            <br />
                          </h2>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
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
                                                    <span>
                                                      <span>
                                                        <span>
                                                          <span>
                                                            <span>
                                                              <span>
                                                                <p>
                                                                  <i>
                                                                    <b>
                                                                      ¿Via
                                                                      judicial o
                                                                      via
                                                                      Administrativa?<br />
                                                                    </b>
                                                                    <br />Depende
                                                                    del género y
                                                                    fecha de
                                                                    nacimiento
                                                                    del
                                                                    ascendiente
                                                                    italiano
                                                                  </i>
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
              </span>
            ),
          },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name l4ll8dvk68c-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            <b>Sin la existencia</b> de una mujer en tu linea de
                            ascendencia
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post l4ll8kkelb-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            La persona de descendencia italiana es de género
                            masculino<br />
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <span>
                    <p>Nacimiento antes del 1/1/1948</p>
                  </span>
                </span>
              </span>
            ),
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
                            <span>
                              <span>
                                <h2>Solicitud mediante via administrativa</h2>
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
            className: 'block-content l4ll8ujdsb-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>
                              La solicitud de reconocimiento de la ciudadanía
                              italiana iure sanguinis se presenta en vía
                              administrativa con una solicitud a realizar:
                            </p>
                            <p>
                              • al Consulado italiano territorialmente
                              competente si el solicitante reside en el
                              extranjero.
                            </p>
                            <p>
                              • al Alcalde del Municipio de residencia, si el
                              solicitante reside en Italia.&nbsp;
                            </p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name l4ll98masw-editor_css',
            children: (
              <span>
                <span>
                  <p>
                    <b>Con la existencia</b> de una mujer en tu linea de
                    ascendencia<br />
                  </p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <span>
                  <p>
                    Nacimiento de la primera mujer de la linea{' '}
                    <b>antes del 1/1/1948</b>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      Nacimiento antes del 1/1/1948<br />
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <h2>Solicitud mediante procedimiento judicial</h2>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content l4lj0at4nh-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          La solicitud de reconocimiento de la ciudadanía
                          italiana iure sanguinis se presenta mediante un
                          procedimiento judicial especifico.<br />
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name l4ll9dg43eg-editor_css',
            children: (
              <span>
                <p>
                  <b>Con la existencia</b> de una mujer en tu linea de
                  ascendencia
                </p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  Nacimiento de la primera mujer de la linea{' '}
                  <b>después del 1/1/1948</b>
                </p>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>Nacimiento después del 1/1/1948</p>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <h2>Solicitud mediante via administrativa</h2>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content l4ll9lga0k9-editor_css',
            children: (
              <span>
                <p>
                  La solicitud de reconocimiento de la ciudadanía italiana iure
                  sanguinis se presenta en vía administrativa con una solicitud
                  a realizar:
                </p>
                <p>
                  • al Consulado italiano territorialmente competente si el
                  solicitante reside en el extranjero.
                </p>
                <p>
                  • al Alcalde del Municipio de residencia, si el solicitante
                  reside en Italia.&nbsp;
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
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
            <span>
              <span>
                <p>
                  Si está buscando un abogado para llevar a cabo su práctica de
                  ciudadanía<br />&nbsp;¡está en el lugar correcto!{' '}
                </p>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1 l4lhz2hyflb-editor_css',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <p>
                Llámanos inmediatamente al <b>+39 329 1379462</b> o pide cita en
                la oficina a través del formulario de solicitud
              </p>
            </span>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <p>
              . Elegiremos la mejor vía, extrajudicial o judicial, para que se
              reconozcan sus derechos.
            </p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
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
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Compañías que confian en nosotros</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1 l4lib2p6d6-editor_css',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
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
                      <p>Bufete de abogados</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>
                <br />
              </p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
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
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        <br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Ubicación&nbsp;</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>Via Medina, P.za Municipio, 37/38/39, 80133 Napoli NA</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>Contacto</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>+39 329 1379462</p>
                </span>
              ),
            },
            {
              href: 'https://www.instagram.com/tanos_italia/',
              name: 'link1',
              children: (
                <span>
                  <p>Tanos Argentina</p>
                </span>
              ),
              target: '_blank',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>©2022 by DevFek All Rights Reserved</span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};

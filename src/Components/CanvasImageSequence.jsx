// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const CanvasImageSequence = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const frameCount = 161;
//     const urls = new Array(frameCount)
//       .fill()
//       .map(
//         (_, i) =>
//           `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
//             i + 1
//           )
//             .toString()
//             .padStart(4, "0")}.jpg`
//       );

//     // const urls = [
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220272/scene00001_imm9mp.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00002_q5obgb.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220272/scene00003_r95bnc.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220272/scene00004_tyewme.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220273/scene00005_fuvk1m.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00006_lotl6l.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00007_upx7dq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00008_cnm5io.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00009_t5vsqa.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00010_ehxdkb.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00011_iejmnp.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00012_d7z9g6.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00013_qo5iij.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00014_xebldn.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00015_pvovvk.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220281/scene00016_hjxyet.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220283/scene00017_skpcre.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00018_qoxhhx.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220283/scene00019_or7mfz.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00020_z2hjro.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00021_jwsgrm.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220276/scene00022_saihxf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00023_sidvfr.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00024_wrv4ji.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00025_io9ry9.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00026_iag3wt.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00027_wn6xue.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00028_wglmhy.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220280/scene00029_c1pbgq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220279/scene00030_h9ixyr.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220281/scene00031_zczmhj.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00032_pfkmqn.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220292/scene00033_yoaqmr.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00034_fmjbyy.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00035_ys1fcy.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220289/scene00036_iim6zg.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00037_lkgr8x.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00038_x73des.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00038_x73des.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00040_iq4kdz.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220286/scene00041_yrkpzf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220288/scene00042_n8sytf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220289/scene00043_i5bgdm.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220289/scene00044_ltmati.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220288/scene00045_x1avzg.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220290/scene00046_rur72o.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220290/scene00047_fhrptn.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220291/scene00048_lgfqxq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220291/scene00049_w3yvhw.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00050_ebldvz.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220292/scene00051_boxqt0.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220292/scene00052_ssandw.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220293/scene00053_pd9k6y.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220298/scene00054_twvhuf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00055_hpbgds.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00056_tmkoll.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00057_zcvloy.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220295/scene00058_d0eaev.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220296/scene00059_xf8fr5.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220296/scene00060_btszhf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220296/scene00061_oagu1r.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00062_rc9pr3.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220309/scene00063_hajlv3.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220308/scene00064_ngmae4.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220308/scene00065_dxzspb.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220309/scene00066_bggr39.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00067_hajgbp.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00068_hh7dv9.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00069_kiwkcf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00070_mdv9sq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00071_zmcsjk.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00072_qqse2w.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00073_qhdnpp.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00074_kocrry.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220313/scene00075_z7p6gk.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00076_x4irlz.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00077_hrxafv.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00078_jsw8dj.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220313/scene00079_npqvxh.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220313/scene00080_y0rtx1.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00081_hr6kyw.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00082_zse4iy.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220314/scene00083_xjuyfx.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00084_v5lk9g.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00085_zkuhgq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00086_ks43qn.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00087_nxdyfi.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00088_imo8cz.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00089_uxbiww.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00090_uxtk8a.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00091_fill61.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220334/scene00092_perbzu.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220346/scene00093_hqleyt.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220360/scene00094_upaf1s.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00095_ajzdvt.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220364/scene00096_kpsyy8.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00097_vd3jgb.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220385/scene00098_ttxp0l.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220362/scene00099_godhyy.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00100_hoszfh.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00101_ph7kov.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220367/scene00102_fzegrv.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220369/scene00103_gb0wek.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00104_kro5hy.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220367/scene00105_xooipw.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220369/scene00106_tzafau.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220371/scene00107_zp4cxj.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220371/scene00108_dfqfw2.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00109_rmx98a.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220377/scene00110_apnnkh.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00111_urabgx.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00112_qbjz6s.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220376/scene00113_x2ivi5.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00114_ynqlsv.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220376/scene00115_qkfxc7.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220376/scene00116_mlacpn.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00117_m21pmr.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00118_js4o4x.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220378/scene00119_pagqsl.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00120_qzesfq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220379/scene00121_vsqrvj.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00122_pcd0z6.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00123_ulaxu5.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00124_qdezty.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00125_edo0dn.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00126_tjizko.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00127_ojyq00.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220382/scene00128_rsh7fx.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220384/scene00129_hhlh8x.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00130_e0u463.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00131_mzry8q.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00132_hjtmmo.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00133_j2lxf1.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220384/scene00134_qaq8va.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220384/scene00135_kdy5gg.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220385/scene00136_vfzr7r.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220386/scene00137_npqfvq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00138_ezrvob.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00139_ir448g.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220387/scene00140_jdjom5.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220387/scene00141_wcrler.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220393/scene00142_dszzpb.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220390/scene00143_t7v0np.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00144_mwacll.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00145_a8v6hl.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220404/scene00146_pwohom.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220393/scene00147_aywmou.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220391/scene00148_ag119v.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220391/scene00149_jbmmsg.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220396/scene00150_kiwb2s.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220395/scene00151_nps3kc.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220405/scene00152_ogmq8s.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220397/scene00153_grbzwr.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220403/scene00154_pjq1pq.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220397/scene00155_pfblg4.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220404/scene00156_qlco2n.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220414/scene00157_fw5eyb.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220400/scene00158_pjfn2z.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220402/scene00159_a6xwkf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220404/scene00160_uqj1tf.png",
//     //   "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220416/scene00161_n5yudf.png",
//     // ];

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let playhead = { frame: 0 };
//     let curFrame = -1;

//     const images = urls.map((url, i) => {
//       const img = new Image();
//       img.src = url;
//       if (i === 0) {
//         img.onload = () => updateImage();
//       }
//       return img;
//     });

//     const updateImage = () => {
//       const frame = Math.round(playhead.frame);
//       if (frame !== curFrame) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(images[frame], 0, 0);
//         curFrame = frame;
//       }
//     };

//     gsap.to(playhead, {
//       frame: images.length - 1,
//       ease: "none",
//       onUpdate: updateImage,
//       duration: images.length / 30,
//       scrollTrigger: {
//         start: 0,
//         end: "max",
//         scrub: true,
//         pin: ".dad",
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="w-full h-full">
//       <div className="relative dad w-full h-screen">
//         <canvas
//           ref={canvasRef}
//           height={800}
//           width={800}
//           className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default CanvasImageSequence;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CanvasImageSequence = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const frameCount = 147;


    const urls = [
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220272/scene00001_imm9mp.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00002_q5obgb.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220272/scene00003_r95bnc.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220272/scene00004_tyewme.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220273/scene00005_fuvk1m.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00006_lotl6l.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00007_upx7dq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00008_cnm5io.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00009_t5vsqa.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00010_ehxdkb.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00011_iejmnp.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00012_d7z9g6.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00013_qo5iij.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00014_xebldn.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00015_pvovvk.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220281/scene00016_hjxyet.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220283/scene00017_skpcre.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00018_qoxhhx.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220283/scene00019_or7mfz.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00020_z2hjro.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220274/scene00021_jwsgrm.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220276/scene00022_saihxf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220275/scene00023_sidvfr.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220278/scene00024_wrv4ji.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00025_io9ry9.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00026_iag3wt.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00027_wn6xue.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220277/scene00028_wglmhy.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220280/scene00029_c1pbgq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220279/scene00030_h9ixyr.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220281/scene00031_zczmhj.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00032_pfkmqn.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220292/scene00033_yoaqmr.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00034_fmjbyy.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220282/scene00035_ys1fcy.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220289/scene00036_iim6zg.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00037_lkgr8x.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00038_x73des.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00038_x73des.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220285/scene00040_iq4kdz.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220286/scene00041_yrkpzf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220288/scene00042_n8sytf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220289/scene00043_i5bgdm.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220289/scene00044_ltmati.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220288/scene00045_x1avzg.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220290/scene00046_rur72o.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220290/scene00047_fhrptn.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220291/scene00048_lgfqxq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220291/scene00049_w3yvhw.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00050_ebldvz.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220292/scene00051_boxqt0.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220292/scene00052_ssandw.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220293/scene00053_pd9k6y.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220298/scene00054_twvhuf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00055_hpbgds.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00056_tmkoll.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220294/scene00057_zcvloy.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220295/scene00058_d0eaev.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220296/scene00059_xf8fr5.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220296/scene00060_btszhf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220296/scene00061_oagu1r.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00062_rc9pr3.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220309/scene00063_hajlv3.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220308/scene00064_ngmae4.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220308/scene00065_dxzspb.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220309/scene00066_bggr39.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00067_hajgbp.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00068_hh7dv9.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00069_kiwkcf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220310/scene00070_mdv9sq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00071_zmcsjk.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00072_qqse2w.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00073_qhdnpp.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220311/scene00074_kocrry.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220313/scene00075_z7p6gk.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00076_x4irlz.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00077_hrxafv.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220312/scene00078_jsw8dj.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220313/scene00079_npqvxh.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220313/scene00080_y0rtx1.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00081_hr6kyw.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00082_zse4iy.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220314/scene00083_xjuyfx.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00084_v5lk9g.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00085_zkuhgq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00086_ks43qn.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220315/scene00087_nxdyfi.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00088_imo8cz.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00089_uxbiww.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00090_uxtk8a.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220317/scene00091_fill61.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220334/scene00092_perbzu.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220346/scene00093_hqleyt.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220360/scene00094_upaf1s.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00095_ajzdvt.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220364/scene00096_kpsyy8.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00097_vd3jgb.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220385/scene00098_ttxp0l.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220362/scene00099_godhyy.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00100_hoszfh.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220365/scene00101_ph7kov.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220367/scene00102_fzegrv.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220369/scene00103_gb0wek.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00104_kro5hy.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220367/scene00105_xooipw.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220369/scene00106_tzafau.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220371/scene00107_zp4cxj.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220371/scene00108_dfqfw2.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00109_rmx98a.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220377/scene00110_apnnkh.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00111_urabgx.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220373/scene00112_qbjz6s.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220376/scene00113_x2ivi5.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00114_ynqlsv.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220376/scene00115_qkfxc7.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220376/scene00116_mlacpn.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00117_m21pmr.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00118_js4o4x.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220378/scene00119_pagqsl.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00120_qzesfq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220379/scene00121_vsqrvj.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00122_pcd0z6.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220380/scene00123_ulaxu5.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00124_qdezty.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00125_edo0dn.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00126_tjizko.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220381/scene00127_ojyq00.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220382/scene00128_rsh7fx.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220384/scene00129_hhlh8x.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00130_e0u463.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00131_mzry8q.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00132_hjtmmo.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220383/scene00133_j2lxf1.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220384/scene00134_qaq8va.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220384/scene00135_kdy5gg.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220385/scene00136_vfzr7r.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220386/scene00137_npqfvq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00138_ezrvob.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00139_ir448g.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220387/scene00140_jdjom5.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220387/scene00141_wcrler.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220393/scene00142_dszzpb.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220390/scene00143_t7v0np.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00144_mwacll.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220389/scene00145_a8v6hl.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220404/scene00146_pwohom.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220393/scene00147_aywmou.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220391/scene00148_ag119v.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220391/scene00149_jbmmsg.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220396/scene00150_kiwb2s.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220395/scene00151_nps3kc.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220405/scene00152_ogmq8s.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220397/scene00153_grbzwr.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220403/scene00154_pjq1pq.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220397/scene00155_pfblg4.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220404/scene00156_qlco2n.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220414/scene00157_fw5eyb.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220400/scene00158_pjfn2z.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220402/scene00159_a6xwkf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220404/scene00160_uqj1tf.png",
      "https://res.cloudinary.com/dqzci9flc/image/upload/f_webp/v1721220416/scene00161_n5yudf.png",
    ];

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let playhead = { frame: 0 };
    let curFrame = -1;

    const images = urls.map((url, i) => {
      const img = new Image();
      img.src = url;
      if (i === 0) {
        img.onload = () => updateImage();
      }
      return img;
    });

    const updateImage = () => {
      const frame = Math.round(playhead.frame);
      if (frame !== curFrame) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[frame], 0, 0);
        curFrame = frame;
      }
    };

    gsap.to(playhead, {
      frame: images.length - 1,
      ease: "none",
      onUpdate: updateImage,
      duration: images.length / 30,
      scrollTrigger: {
        trigger: ".dad",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: ".dad",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="relative dad w-full h-screen bg-black">
        <canvas
          ref={canvasRef}
          height={1080}
          width={1920}
          className="absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default CanvasImageSequence;

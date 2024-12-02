let positions = [
    "L3Bvc2l0aW9ucy9HLVNwb3QtU25pcGVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9Eb2dneS1TdHlsZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy82OS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9NYXN0ZXJ5LVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9Bc2lhbi1Db3dnaXJsLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9BY3JvYmF0LVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9BbWF6b24tU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9BbnZpbC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9CYWNrLVNlYXQtRHJpdmVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9CYWxsZXJpbmEtU2V4LVBvc2l0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9CYXNzZXQtSG91bmQtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9CZW4tRG92ZXItU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9CZW5kZWQtS25lZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9CZW50LVNwb29uLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9CZXR0eS1Sb2NrZXItU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9CaWctRGlwcGVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9Cb2R5Z3VhcmQtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Cb29rLUVuZHMtU2V4LVBvc2l0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9Cb3VuY2luZy1TcG9vbi1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9CcmlkZ2UtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9CcnV0ZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9CdWxsZG9nLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9CdW1wZXItQ2Fycy1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9CdXJuaW5nLU1hbi1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9CdXR0ZXJmbHktU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9DaGFpci1SaWRpbmctU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Db2l0YWwtQWxpZ25tZW50LVRlY2huaXF1ZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9Db3JuZXItQ293Z2lybC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9Db3JuZXItRG9nZ3ktU3R5bGUtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Db3dib3ktU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Db3dnaXJsLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9DcmFiLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9Dcmlzcy1Dcm9zcy1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9Dcm9zcy1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9EYW5jZXItU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9EZWNrY2hhaXItU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9EZWVwLUltcGFjdC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLTEuanBn",
    "L3Bvc2l0aW9ucy9EZWxpZ2h0LVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9Eb3duLVN0cm9rZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9EcmlsbC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9EdWJsaW4tU2h1ZmZsZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9FeHBvc2VkLUVhZ2xlLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9GYWNlLU9mZi02OS1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9GYXN0LUZ1Y2stU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9GaW5hbC1GdXJsb25nLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9GaXJlLUh5ZHJhbnQtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Gcm9nLUxlYXAtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Hb2xkZW4tR2F0ZS02OS1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9IYW5nLUxvb3NlLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9IaWdoLUNoYWlyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9JbnRlcnNlY3Rpb24tU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9JcmlzaC1HYXJkZW4tU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9JdGFsaWFuLUhhbmdlci1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9KZWxseWZpc2gtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Kb2NrZXktU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9KdWdnaGVhZC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9MYXVuY2gtUGFkLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9MYXp5LVdoZWVsYmFycm93LVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9MZWFwLUZyb2ctU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9MZWctR2xpZGVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9MZWdzLU9uLVNob3VsZGVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9MZWdzLVNwcmVhZC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9MaWZlLVJhZnQtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9MaXR0bGUtRGlwcGVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9Mb3R1cy1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9MdW5nZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9Nb25nb2xpYW4tU211cmYtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9PY3RvcHVzLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9QaWxlZHJpdmVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9QaXN0b24tU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Qb2xlcy1BcGFydC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9QdW1wLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9SZWFyLUFkbWlyYWwtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9SZWFyLUVudHJ5LVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9SaWdodC1BbmdsZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9TYW5kd2ljaC1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9TY2lzc29ycy1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9TZWUtU2F3LVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9TaG9lLVNoaW5lci1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9TaWRlLUVudHJ5LU1pc3Npb25hcnktU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9TaWRlLVJpZGUtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9TaWRlLVNhZGRsZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9TaXR0aW5nLVNleC1Qb3NpdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9TbGlkaW5nLUxhZHktU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9TcG9vbmluZy1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9TcG9ya2luZy1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9TdGFpcndheS1Uby1IZWF2ZW4tU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9TdGFuZC1BbmQtQ2FycnktU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9TdXBlcndvbWFuLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9TdXNwZW5kZWQtNjktUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9Td2lzcy1NaXNzLVNleC1Qb3NpdGlvbi1QaWN0dXJlLmpwZw==",
    "L3Bvc2l0aW9ucy9TeWJpYW4tU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9UZWEtU3Bvb25pbmctU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9UaGlnaC1UaWRlLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9UdWctT2YtTG92ZS1TZXgtUG9zaXRpb24tSWxsdXN0cmF0aW9uLmpwZw==",
    "L3Bvc2l0aW9ucy9UdXJ0bGUtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9Ud2lzdGVyLVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
    "L3Bvc2l0aW9ucy9WaWVubmVzZS1PeXN0ZXItU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9XYXNoaW5nLU1hY2hpbmUtU2V4LVBvc2l0aW9uLUlsbHVzdHJhdGlvbi5qcGc=",
    "L3Bvc2l0aW9ucy9YLU1hcmtzLVRoZS1Qb3N0LVNleC1Qb3NpdGlvbi1JbGx1c3RyYXRpb24uanBn",
];

$(function () {
    let vip = localStorage.getItem("vip");
    let length = 100;
    if (vip) {
        length = 100;
        $("#position-count").text(100);
        $("#goabout").hide();
    }
    $("#card").on("change", () => {
        $("#position").attr("src", "");
        if (!$("#card")[0].checked) {
            new Howl({
                src: "/Gold2.wav",
                format: ["mp3"],
                autoplay: true,
                onload: function () {
                    window.voice = null;
                },
            });
            let src = atob(positions[Math.floor(length * Math.random())]);
            setTimeout(function () {
                $("#position").attr("src", src);
            }, 200);
        }
    });
});

import React, { useEffect, useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import setAccessTokenAsync from "../store/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "../index.css";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { access_token } = useSelector((state) => state.users);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (access_token) {
      history.push("/");
    }
  }, [access_token]);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const login = () => {
    dispatch(setAccessTokenAsync(user));
  };

  return (
    <>
      <Container className="w-25 p-4 login" style={{ marginTop: "120px", backgroundColor: "white", border: "1px solid grey", borderRadius: "10px" }}>
        <h2 className="text-center mt-3 mb-4"><b>Login</b></h2>
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEVFBcUExURFxcZGREYGhkXGRcXFxQXFxgYGhcUFxkaICwjGhwoIRcVJDUkKC0xMjIyGSM4PTgwPCwxMi8BCwsLDw4PHRERHS8oIigxMTExMTEzMTExMTExMTExMTEvMTExMzExMTExMS8xMTExMTExMTExMTExMTExMTExL//AABEIAMEBBgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABIEAABAwEDBgcKDAYDAQAAAAABAAIDEQQSIQUGEzFBUSJhcYGRodEHFBYjMlJTkrHhFUJUYmNyc5OissHSM0OCg8LDNPDxJP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EADQRAAIBAgMFBQcDBQAAAAAAAAABAgMRBBIhEzFBUaEUYXGR0QUyUoGx4fAVM8EiIzRCwv/aAAwDAQACEQMRAD8A7MiIgCIiAIiIAiIgCIiAIiIAiIgCIiAxeWMqaBrTdvFxNBWgoNZJpxhYjwqf6FvrHsVzPHVFyv8A8VDybBIYwW2Vkgq7hlwBOO4nZq5ltpU6eyUpLrbj4mCrUqbVxi7fK/BdzJHhU/0LfWPYnhU/0LfWPYqu9JfkMXrt/cse7KMYNDZYajjK6KnSe6PX7lJVKsfem14xa/5Mvk/OIyPbG6MNvGgIdWh2YUWxLQcmuDrTG4NDQXg3RqHEKrflmxNOMGsq4GjC1JTi8zvqERFnNQREQBFb0rd6rQHqIiAIiIAiIgCIiAIiIAi1m2ZeeHOawMoCRiCSaYV1qz4Qz7o+g9qxvHUU7a+RsjgKrV9DbEWp+EM+6PoPanhDPuj6D2qO30e8t+n1e7r6G2ItT8IZ90fQe1PCGfdH0HtTt9HvH6fV7uvobYrbpQOPkWqOy7OdYZ0HtVPwzL8zoPapWPod/l9yOwVu7z+xtRn4kE/EsBkzKjnvuPAxrQjDECtCswtdGpTqxzQMtWlOlLLIlNlaferigq5HKRxhdHDkUMFngMIjxyexvYVhbN3pdGlE97Gt0su8VK46lvckbHijmtcNxAI6CtcyXkS9I6SRtGgvus87hHEjdxbeTXroVlGnZ6W69xgr0JOrmVnfnwsjX7Vor3ir92g8q7ert8nCitLoneEHoovUb2J8Hweii9RvYp7ZG25lOwu+9eRpGRh4+L6w6l0FR4rJE01axjTvDQD0gKQs1artGmka8PRdKLTdyh7wNatd8cXWqnQ1NSSvO9hvK5rLxOwE441allJ5Fd72G8p3sN5UrKgRlehkpgdXsVfew3lO9hvKltMF9FZbDT4zlWAd9ehcyStERAEREAREQBERAYSSwxEk3G6zv3qoZKjIqGDp96vO1nlKnxahyBZIUoSeqXka51pxSs2Yv4JZ6NvT71aNgi8xvWs6sW+VwcboqamuFdqtKjBW06IiFepLj1IL7JFqDG9at95x+YOtZHTS+b+H3JppfN/D7lGyhy6IttZ8+pj+84/MHWvO84/MHWpbmuJqWnoKpcwjWCOUKNlD4V5InaS+J+bKLLZo2vBDQDj7CskoUHlDn9imrVQilHRGas25asIiLucj1jyCpTXAioURVRvoVVxuCYi1vOvO2z2Fgc+r5H1uRNIDnU1uJPksG/oBXKcp90bKcpNyRsLdjY2trTje8FxPGKciqoti53pF8/ZPz/ypE4O05lbtZK1rmu5wA4cxXY80844rdBpWC69puyRk1Mb6VpX4zTrB2jcQQDjYm5nkRFUBEWv5WzgMMhYGB1A01JI1iuqiHSnSlUeWO82BFqXha/0TfWPYvPCx/om+sexDv2Gvy6r1NuRaj4WP9E31j2J4Wv8ARN9Y9iDsNfl1Xqbci1Lwrk9E3pPYnhY/0Tek9iDsNf4eq9TbUUPJdr0sTZKXb17CtaUJGvmRDLKLi2nvRMREQgIiIDGO1nlKvh8gAAHUrUrSCa7yvLx3npWVOzNVrovPlkpg3qKiBsgJIDwTroCqZJXV8p3SVRpHec7pKvfxIy+BfrN9J1pWb6TrVjSO853SU0jvOd0lLomzL/jvpOtUS6SnCvU460VvSO853SV455Osk8pS4syqDyhz+xTVEs7Teqpa0UfdOFX3gqo2V2qlAuhzBREUg5L3TMg2l1sbMxpkZKGRsDcXNfGxzjHd3Ua94I3u1bcJkzMu2SEaRoiZtc+hdT5rAa15aLovdAyiyE2IvIH/ANIeeJgilje7kGlbVZPRcC/fZjqANXHmWetVnDRHalCMt5yrLOaEkc8cNnLpdIxzwX3WltwgPvHAU4TPWoo+RMr2rJdqcbuIo2WIngyN1jEVocatcNVdxIXUbdI5kb3sDb7WSFl4VF4CoBG0VAqNtFxe326SeR0shBe+hNBQCgAAA2AABKFSU1qRVhGO475m9nlYrZRsb7slKmJ4uvw102Pp80lbGvlhjy0hzSWuBBDmkhzSMQ5pGIIO1d/zCzgdbbI2R9NKxxjkphVzQCHj6zXNOGFSRsXWUbHI2haJnT/yXcjPyhb2tFzoae+TgdTNnzVzPQ9nfuvw/lEhkr6Dx2TtQ1gV5+ArdqtkjBUOsTsaUYwEjXji0YYdaw0dQQbtaEGhFQabCNoWR+FHfJrJ9z71Fj0dhZ7r+RLgtL3AOMlgbX4rmgOHLwVGt73Ex1fZncIfwhQjV5XBGCp+FHfJrJ9z71HtNqc+74qFl018XHdrxGmtEI0mpJ2+nodGWq56fyv7v+Co8KpfRN6XdixuV8pvtFysd27e1VNb1OLiUmHC4SrTqqUlpr9Dac2f+NH/AF/nci9zbBFmjqCPL1/Xcikx4j92fi/qZVERDiEXhK9QBUPdQEqtWbQcFK1YI6Ii6lQi9cBXBeILBEWKmysWuLdHqJHlbtupXhCU/dIlJR3mVRYf4a+Z+L3J8NfM/F7lbYVOXVFdrDmZhFh/hr5n4vcshZLUJAcKattcColSnFXaJU4t2RIREXMuck7r7n98wg+QIiW/WMjtJ1CLqWu5Gzgt0YEcUlWAYB4DgwcROIHFWi7Vl7IVntkejnaTQ1a5po+M+cx36GoO0LkmUskx2WWSGN7pGtd5TgAdVC00wNCCK4ci14PCRxVXJPdvf5+aBNp6G6ZLt4fZ2vke0kNpIcGgEYOqNm/nXNxkSras0lN5AKnRMvOA3kBZxopgNQXp0vZVDDOd/wCpSeiemVK+l73e+19NEtOJepUzJX4GgzwuY667/wBG9dc7jNle2zzSEEMkkaGbnaNtHOHFU3eVhWvZMyFZ7VaCJr5bGL11jrmkrQEOcBUDkoeMLplmtrY2NjjjYxjAGta3BrWjUAAvJxlDZ1XCO7Rr5pP+ShnUWJs2U3Okay6BUPJOOAaB+passsTVtGSERFACIiAIiIAiIgPCvOnqVSICkchTmVSIDwFWLTs51IUe06wrR3hllERdCAiLW8tiVkjnNJDXtAwOGqhaePDrUxV9DjWq7KOZq/5vM7ZbXHICY3VDSQeXi4uNYrLcNHh/nDHlHup0LBZPklFWxki9dFAaEkVp7VtmUYL0ZGstAPONfVVdqf8AbmmZ6NftFN6ary+RryrZE4guDXEDWQMAqFlcm5RZGwtcDrJFNtdi2VJSjG8VcmKTerMUshkqajgObp1dax5VcLqFWqRzRaITs7m1orVnkvNDuLHl2q6vKatobTx1aGlK40rqrsquP5xWR8cnDIcSHcIanEONTjyrrlpkusc7cCefYua53RcFj9xc31gCPylbfZmIdPFwp8JXv5O3U6RheLlyMLkaEvlDBrNaHYKAkk8wPSs7a8nSRtLnht0a3Aig6cVYzLs9ZJJNzQ0crj2N61MzztlGtiBxcbx+qPJHOan+lbsRiqsvaUcNTtayzXW7fJtar/Vq3f4llCOTMyxma+tolO9hP420W5rSMxx42Q/R+1zexbuuPtP/ACH4L6HFlWT5A20NJ2RTfifDT8pWwMtLDtpyrWsnms8nzYoPxPlr+ULKrypRTZKMq1wOogqpYgHcr7LS4a8eXtVMguZBFailDtXQrqoSEREAREQBERAEREAUe0jVzqQrU4wUreCMiLxwqKexdSD1cw7qtjAmhlp5cbmE8cbqjqk6luYzcHyvKX35/ao9rzPglAEs1tkANQHyhwB3ircETBy/NaxCW2QRkVGka4/Vj4ZrzNpzrui1azZj2WJ1+OW1sdQi8yUNdQ6xUNU3wdHyvKP35/apZBAtjAyRzKjA4chxHUQrWkbvCnPzTicautFuJ3map/KqfBCD09t++H7VrWKVtUZ3QdyHpG7wmkbvCu2XNWJ2krNbeDI5opKNQA18HjV/wQg9Pbfvh+1T2qPJkbB8y5BlJzG8G6a441wPTxKs5SeR5QHIB+tVZGaUPp7d98P2r3wTh9Pbvvh+1YqkYTk3eS8LGmEpQVrJh8xfwS9zq0wrgd2ASbJl5tHx3m4GjhXVtoVZteb9mhaZJLXa42t+M6cNAOyhu6+IYrSMtZytqW2OfKLvpZJnBv8ARHQOPKaci49nWZSjKV+fHzOyrytZpdTa4co2Ngox8DBro263qGtaTli26WZ79hNG/Vbg3k386wxtMhJJcSSSSTiSTiSUFodxL2cDLCYSbqLO5NW1y6cXx/LFZ1cysbvmKzGV24MHSSf0C3FaLmDlLhyQuAq4X2neW4Ob0Go5Ct6XLF1lWrOa3O3RJHIpyTjJOdzomerG1/8AsWTWNyGMJXedNJ+BrI/9aySxskL1eIoJPWuINRrWTifeAKximWE4EcY/71Ks1oES0RFyJCIiAIiIAiIgCpcKiiqRAQSEVydtDXera6p3ICIikBF7ReIAiIhBDsGuX7WT2NUxQ7Brl+1k9jVgM987RYmtZG1r5pAS0OrdjaMNI4DE1NQBhWh3YiTZLVao4mGSR7I2DW55DWjnK0LLndJYKssUd8+lkBDBxtZg53KachXP7flGe1P0lokfIRqBwa3iY0YN5grQFFZIi5It9tnnfpLRK+V2y8eC3iY0YNHIArC8RWIC9XiIDKZsvLbXCR54HM4Fp6iV1pc9zFyS58nfDgQyO9dJ+O8gjDeACeenGugucACTqFSeQKQe5AHiQfOktD+Z80jh1ELIqDkJhFmhBFDooiRuJaCeslT1QsCKa14q3vJ1lUKAFNsIwJ4/Z/6oayUDKNA/7iqTegRdREXMkIiIAiIgCIiAIiICiRtRRRFOUS1xnyhz9qtF8CGWy4KgyBWl4uoJDbTQEUVGl4laRLIF7ScS9DwrCJYFOTz/ABftn+xq5L3UK9/mvooacQ4WHTXpXUrDrl+1f7GrmPdRZ/8Aaw74Yup8o7EBqcBworqjRE3hTbhy1UlWRUymSchWi0tc6K5Rpum86hBpXVuWUjzHtR8p9naPrPJ6Ln6qT3NZWaeWJ4JD47wo5zeFG7VgRse7oXR3WGHzX/eyfo5Lg57BmEf5k/MyP9S79FmLDmhY46EtdIfpDUeqAAecFZu1WKPSxM8ZR2lr42X4rajG+pByPBul+9m/epuTYtsaAAAKAYADAAbgFBkPfBMMeLNU0g8ljPjRNdtkdqoPJBJNDdByHwNZ9rC4bnvle08rXuIPQp7GNaA1oDWjAAAAAbgBqUXFiqi8RFUk9XiIgLsDLzgNmsrJqPZY6Cp1n2bFIXKTuyQiIqgIiIAiIgCIiAIiIAiIgIFogu4jV7FHWWUOey7W9HYukZcyCIi9RXB4iIgIlh/m/av9jVzrurs8fC7fE4eq8n/JdFsP837V/satC7rTOHZnfNtA6DEf1KA07Nyz6S12dm+WEnka4Od1ArM565L0FrfQUZJ41m4Xjw28zq8xCo7ndnv2+M+Y2Z/4Cwdbwt77oGS9LZTI0cOEl43lmqQdFHf0KSDnmbNr0Vsgk2aRrT9WSrCeYOrzLti+f13XJVr0sMUvnxsceIkCo6aqWEUWr+NB/f8AyKaoVq/jQf3/AMimqpIREQBF6iAKRZYa8I6tnGqoLNtd0dqmqkpcEAiIuZIREQBERAEREAREQBERAEREAREQFmSFrteveFFksrhqx9qyCKyk0DEEEa0WVc0HWAVZfZWneORWzoixhLB/N+1f7GrS+6zH4uzu3PmHrNaf8V0WLJt29R1bznOxFKVAw6lovdaszhZoXGmEwGHHHJ+1WUkwYXuUQVmnk82JjPvH1/1LpxaCCCAQagg6iDrC0juTWV3e8zw08KUMrvEbGn2vK3vRO813QVLYOG5fyabPaJIsaNNWHfG7Fh48DTlBXRe51a79juHXE97OZ3DH5yOZQ+6ZkhxjZaQ01jIY80+I88Enkcaf1rG9y60nTSw+exrwOON1D1P6la+hHE3q1fxoP7/5FOVuewyOkieG4N0takYXm0CmNsbtpA61TMiSOvApzbI3aSepX2saNQAUOaFiFHZnHXgOPX0KVHC1urXvKvIqOTZIREVQEREAREQBERAEREAREQBERAEREAREQBERAEREBqmVM/cmwOcx0pe9pcC2Nrn0LTQgu8kEHDWuY5cz5tFpkJdHC6AOBZBIxr2ilQJHO8q/QnUaCtKbT1vwOyZ8ks3qBejNHJnyOyc8TD7Qp0I1MD3KsomazSgshjDJiGtjbcaGuYx2qpqa3sVvahWDJtngaWwRRRNJvERsawE0AvENAqaAdCxudLMpOYxuT3QseXG++T4raYBguuFSdpGzjUEknOSezMssvfTw2JzHMccam8CKNAxLtwGOC5TmroLNPHanW2y3Gl14VcHua5paascA5pxrSmxTcpZi5dtJBtFogkpiA+WS60nWWtbFdaeQKIO5VlE65LEOSSU/6wrcLJkX7jtANcQqlAyPZpI7PFHK5rpGRxte5taOc1oBcK440U9VJCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID//2Q=="
          alt="Paris"
          className="mx-auto mb-1 mt-4 d-block"
        ></img>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Email" name="email" onChange={(e) => handleOnChange(e)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => handleOnChange(e)} />
          </Form.Group>
        </Form>
        {/* jika Button masuk dalam form jangan lupa kasi e.preventDefault ya di function login karena dia jadi punya behaviour seperti parent nya yaitu form */}
        <Button variant="success" type="submit" onClick={login}>
          Login
        </Button>
      </Container>
    </>
  );
}

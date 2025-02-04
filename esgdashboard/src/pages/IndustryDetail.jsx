import "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const IndustryDetail = () => {
    const { code } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const industryName = location.state?.name;
    const industryBenchmarkNonsense = {
        A123: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>🌱 Carbon emissions: 50 tCO₂e/hectare 🌧 Water usage: 5,000 L/ton</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ National Farmers’ Federation (NFF) Sustainability Framework ✅ Carbon Farming Initiative (CFI)</p>
                <h2>Best Practices</h2>
                <p>🌾 Regenerative farming 🌱 Sustainable irrigation practices 🚜 Reduced pesticide use</p>
                <h2>Ranking</h2>
                <p>6th (Moderate compliance)</p>
            </div>
        ),
        B456: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>🏦 ESG Investment: 45% of total portfolio 💰 Green loan uptake: 30% YoY growth</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ ASIC ESG disclosure guidelines ✅ APRA’s Climate Risk Prudential Standard (CPG 229)</p>
                <h2>Best Practices</h2>
                <p>🏦 Sustainable finance programs 📊 Green bonds issuance 🌍 Climate risk assessment</p>
                <h2>Ranking</h2>
                <p>2nd (High compliance) </p>
            </div>
        ),
        C789: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>🚧 Waste reduction: 40% site materials recycled ⚡ Energy efficiency: 30% lower than traditional methods</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ Green Building Council of Australia (GBCA) ✅ National Construction Code (NCC)</p>
                <h2>Best Practices</h2>
                <p>🏗️ Low-carbon cement use 🏠 Passive building designs 🌱 Green Star-certified projects</p>
                <h2>Ranking</h2>
                <p>8th (Low compliance)</p>
            </div>
        ),
        D012: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>	📚 Renewable energy adoption: 70% universities use solar 🔋 Carbon reduction: 20% per campus</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ Tertiary Education Sustainability Framework ✅ Green Star – Education certification</p>
                <h2>Best Practices</h2>
                <p>🌍 Sustainable campuses 🏫 Energy-efficient buildings 📚 Environmental literacy</p>
                <h2>Ranking</h2>
                <p>4th (Above average compliance)</p>
            </div>
        ),
        E345: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>⚡ Renewable energy share: 45% of total grid supply 🔋 Battery storage capacity: 3 GW	</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ Australian Energy Regulator (AER) ✅ Clean Energy Regulator (CER) compliance	</p>
                <h2>Best Practices</h2>
                <p>🌞 Solar & wind expansion 🔄 Grid decarbonisation 💡 Demand response programs</p>
                <h2>Ranking</h2>
                <p>3rd (Above average compliance)</p>
            </div>
        ),
        F678: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>📈 ESG-aligned investments: 60% of portfolio 🌱 Carbon-neutral commitment: 100% by 2035	</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ ASIC ESG disclosure requirements ✅ Australian Sustainable Finance Roadmap	</p>
                <h2>Best Practices</h2>
                <p>💰 Impact investing 🏦 ESG due diligence ♻️ Sustainable portfolio screening	</p>
                <h2>Ranking</h2>
                <p>1st (Best compliance)
                </p>
            </div>
        ),
        G123: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>🏢 Green procurement: 70% contracts sustainable 🚗 Electric vehicle adoption: 30% fleet EVs	</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ Climate Change Act 2022 ✅ Public Sector Sustainability Charter	</p>
                <h2>Best Practices</h2>
                <p>🏛️ Net-zero policies 📜 Ethical supply chains 🌱 Government solar programs	</p>
                <h2>Ranking</h2>
                <p>5th (Moderate compliance)</p>
            </div>
        ),
        H456: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>💉 Waste reduction: 20% less plastic in hospitals 🔬 Medical emissions: 15% reduction per facility	</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ Australian Council on Healthcare Standards (ACHS) ✅ National Health and Medical Research Council (NHMRC)	</p>
                <h2>Best Practices</h2>
                <p>🏥 Eco-friendly hospitals 🌡️ Sustainable waste management 🚑 Green medical tech	</p>
                <h2>Ranking</h2>
                <p>7th (Low compliance)</p>
            </div>
        ),
        I789: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>📉 Climate risk exposure: 20% assets under ESG review ⛈️ Disaster insurance claims: 10% increase YoY	</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ APRA’s climate risk standards ✅ Sustainable Insurance Forum (SIF) ✅ Insurance Council of Australia (ICA)</p>
                <h2>Best Practices</h2>
                <p>🏢 ESG-aligned underwriting 🔄 Climate resilience modeling 🌍 Sustainable policies	</p>
                <h2>Ranking</h2>
                <p>9th (Lowest compliance)</p>
            </div>
        ),
        J012: (
            <div>
                <h1>Benchmark Figures</h1>
                <p>📰 Green newsroom policies: 50% less paper 📡 Carbon-neutral reporting: 30% media firms	</p>
                <h2>ESG Standards & Compliance</h2>
                <p>✅ Media Ethics & Sustainability Code ✅ ACMA Environmental Broadcasting Standards	</p>
                <h2>Best Practices</h2>
                <p>🎥 Digital-first content 🌱 Carbon offsetting travel 🚨 Climate reporting	</p>
                <h2>Ranking</h2>
                <p>10th (worst compliance)</p>
            </div>
        ),
    };
    
    return(
        <div className="industry-detail-container">
            <div className="industry-detail-content">
                <h1>Industry Detail for {industryName}</h1>
                <div>{industryBenchmarkNonsense[code]}</div>
                <button onClick={() => navigate('/')}>Back to Dashboard</button>
            </div>
        </div>
    )
}
export default IndustryDetail;